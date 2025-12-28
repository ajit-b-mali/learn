#include "AssetManager.hpp"

#include <SFML/Graphics.hpp>

int main()
{
    sf::RenderWindow window(sf::VideoMode({ 800, 600 }), "SFML Window");

    sf::Vector2i spriteSize{ 32, 32 };
    sf::Sprite sprite(AssetManager::GetTexture("assets/spriteSheet.png"));
    sprite.setTextureRect(sf::IntRect({ 0, 0 }, spriteSize));

    int framesNum = 8;
    float animationDuration = 1.f; // seconds
    float timePerFrame = animationDuration / static_cast<float>(framesNum);

    while (window.isOpen())
    {
        while (const auto event = window.pollEvent())
        {
            if (event->is<sf::Event::Closed>())
                window.close();
        }

        window.clear(sf::Color::Black);
        window.draw(sprite);
        window.display();
    }

    return 0;
}