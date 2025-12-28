#include <SFML/Graphics.hpp>

#include <optional>

int main()
{
    sf::RenderWindow window(sf::VideoMode({800, 600}), "Box Bound");

    sf::RectangleShape player({ 50.f, 50.f });
    player.setPosition({ 100.f, 100.f });
    player.setFillColor(sf::Color::Green);
    player.setOrigin({ 25.f, 25.f });

    sf::RectangleShape obstacle({ 80.f, 80.f });
    obstacle.setPosition({ 400, 300 });
    obstacle.setFillColor(sf::Color::Red);

    sf::RectangleShape ghost({ 0.f, 0.f });
    ghost.setFillColor(sf::Color::Transparent);
    ghost.setOutlineColor(sf::Color::Transparent);
    ghost.setOutlineThickness(2);

    float speed = 0.125f;
    while (window.isOpen())
    {
        while (const std::optional<sf::Event>& event = window.pollEvent())
        {
            if (event->is<sf::Event::Closed>())
                window.close();
        }

        player.setPosition(window.mapPixelToCoords(sf::Mouse::getPosition(window)));

        // update
        // if (sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Down))
        //     player.move({ 0, speed });

        // if (sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Up))
        //     player.move({ 0, -speed });
    
        // if (sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Left))
        //     player.move({ -speed, 0 });

        // if (sf::Keyboard::isKeyPressed(sf::Keyboard::Key::Right))
        //     player.move({ speed, 0 });
    
        // collistion detection
        sf::FloatRect playerBounds = player.getGlobalBounds();
        sf::FloatRect obstacleBounds = obstacle.getGlobalBounds();

        if (const std::optional<sf::FloatRect> intersection = playerBounds.findIntersection(obstacleBounds))
        {
            player.setFillColor(sf::Color::Blue);
            ghost.setPosition(intersection->position);
            ghost.setSize(intersection->size);
            ghost.setOutlineColor(sf::Color::White);
        }
        else
        {
            player.setFillColor(sf::Color::Green);
            ghost.setOutlineColor(sf::Color::Transparent);
        }


        window.clear();
        window.draw(obstacle);
        window.draw(player);
        window.draw(ghost);
        window.display();
    }
}