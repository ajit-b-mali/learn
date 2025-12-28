#include <print>

//  T>
T maximum(T a, T b)
{
    if (a > b) return a;
    return b;
}

int main() {
    std::print("The maximum: {}", maximum(static_cast<int>('b'), static_cast<int>('a')));
}