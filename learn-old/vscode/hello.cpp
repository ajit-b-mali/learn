#include <iostream>
#include <vector>
#include <string>
#include <string_view>
#include <optional>

std::optional<std::string> get_string(std::string_view prompt)
{
    std::cout << prompt;
    std::string str{};
    std::getline(std::cin, str);
    if (str == "") return {};
    return str;
}

int main()
{
    using namespace std::string_literals;
    std::vector str{"Hello,"s, "world!"s};
    
    std::optional<std::string> name{ get_string("Enter your name: ")};
    if (name)
        str.push_back(*name);
    else
        str.push_back("noname");

    for (const auto& e: str)
        std::cout << e << ' ';
    std::cout << '\n';
}
