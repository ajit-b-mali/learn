#include <SFML/Graphics.hpp>
#include <print>

class Application
{
public:
    Application() = default;

    void run()
    {
        while (m_window.isOpen())
        {
            while (const auto event = m_window.pollEvent())
            {
                if (const bool ans = event->is<sf::Event::Closed>())
                {
                    std::println("Closing the Window{}", ans);
                    m_window.close();
                }
                else if (const auto& key = event->getIf<sf::Event::KeyPressed>())
                {
                    std::println("Other event");
                    std::println(key->);
                }
            }
            m_window.clear(sf::Color(26, 38, 77));
            m_window.display();
        }
    }

private:
    // sf::RenderWindow m_window{ sf::VideoMode({640, 480}), "Hello, SFML!" };
    sf::RenderWindow m_window(sf::VideoMode({640, 480}), "Hello, SFML!"); // not works
};

int main()
{
    Application application;
    application.run();
}
