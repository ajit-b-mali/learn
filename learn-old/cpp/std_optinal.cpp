#include <iostream>
#include <optional>

std::optional<int> print(int value)
{
    if (value < 0)
        return {};
    return value;
}

int main()
{
    std::optional<int> value = print(-10);
    if (value)
        std::cout << "valid >>> " << *value;
    else
        std::cout << "invalid";
    return 0;
}