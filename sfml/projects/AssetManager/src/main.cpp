#include "../include/AssetManager.h"

#include <SFML/Graphics.hpp>

#include <optional>

int main()
{
    sf::RenderWindow window(sf::VideoMode({800, 600}), "Asset Manager Example");

    AssetManager manager;

    sf::Sprite sprite1(AssetManager::GetTexture("assets/myTexture1.png"));
    sf::Sprite sprite2(AssetManager::GetTexture("assets/myTexture2.png"));
    sf::Sprite sprite3(AssetManager::GetTexture("assets/myTexture1.png"));

    sf::Clock clock;

    while (window.isOpen())
    {
        float dt = clock.restart().asSeconds();

        while (const std::optional<sf::Event> event = window.pollEvent())
        {
            if (event->is<sf::Event::Closed>())
            {
                window.close();
            }
        }

        window.clear();
        window.draw(sprite1);
        window.draw(sprite3);
        window.draw(sprite2);
        window.display();
    }

    return 0;
}