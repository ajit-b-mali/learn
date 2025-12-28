# C++23 templates

C++ Templates are the superpower of the language, allowing you to write high-performance, generic code that works with any data type.

## Roadmap

1. **The Foundation**: Function & Class Templates.
2. **The Modern Shift (C++20)**: Concepts & Constraints (The end of scary error messages).
3. **The C++23 Revolution**: Deducing this, multidimensional operators, and compile-time logic.
4. **Pro Techniques**: Variadic templates and Metaprogramming.

## 1. The Foundation

Templates were introduced in C++ with the release of C++ 3.0 in October 1991

### Function Template

If you wanted a function to add two numbers, you had to write a separate function for every data type.

```cpp
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
float add(float a, float b) { return a + b; }
// ... repeating forever
```

Templates allow you to create a blueprint. You tell the compiler: "I don't know the type yet. Let's call it T. When someone uses this function, generate the code for that specific type on the fly."

```cpp
// The Blueprint
template <typename T>
T add(T a, T b) {
    return a + b;
}

// Compiler generates: int add(int, int)
add<int>(10, 20)

// Compiler generates: double add(double, double)
// We can let the compiler 'deduce' the type (omit <double>)
add(5.5, 2.3)
```

### Class template

It is a container that holds something, and we define that something whene we create the object

```cpp
template <typename T>
class Box {
private:
    T item;
public:
    Box(T i) : item(i) {}

    T getItem() {
        return item;
    }
};

// A Box that holds an int
Box<int> intBox(123);
    
// A Box that holds a double (CTAD - Class Template Argument Deduction)
// C++17 and later can figure out the type automatically:
Box doubleBox(3.14);

intBox.getItem();
doubleBox.getItem();
```

### Guardrails (Concepts)

If you passed a type that didn't work (like trying to add two standard strings inside a math function), the compiler would vomit 100 lines of unreadable errors.

Concepts allow you to constrain what T can be. This is standard practice in C++23.

```cpp
// Constraint: T must be an integral type (int, long, etc.)
// If you pass a float or string, you get a clean error immediately.
template <std::integral T>
T modulo(T a, T b) {
    return a % b;
}

modulo(10, 3); // Works

// modulo(10.5, 2.1); 
// Error: double is not satisfied by constraint 'std::integral'
```

### Deducing `this` (Explicit Object Parameter) C++23

allows a member function to know the type of the object calling it (value category and const-ness) via a template parameter.

```cpp
struct Dog {
    // C++23 Syntax: 'self' is the object instance
    template <typename Self>
    void bark(this Self&& self) {
        // We can inspect 'self' at compile time
        std::cout << "Woof!\n";
    }
};
```

### Multidimensional Subscript Operator []

```cpp
template <typename T>
struct Matrix {
    // C++23 allows multiple arguments in []
    T& operator[](size_t row, size_t col) {
        // logic to access data...
        static T dummy; 
        return dummy; 
    }
};

Matrix<int> mat;
mat[1, 2] = 5; // Clean syntax! No more mat(1, 2)
```

## TL;DR

- Templates allow you to create a blueprint. You tell the compiler: "I don't know the type yet. Let's call it T. When someone uses this function, generate the code for that specific type on the fly."
- syntax for template - `template <typename T>`
- Function template, Class template, Struct template
- C++17+ can use CTAD
- C++20+ for guardrails instead of typename use guardrail
- C++23+ `typename Self` for deducing `this`
- C++23+ Multidimentional operator supported [row, col]

## Questions

- CTAD - Class Template Argument Deduction?
- various guardrails
- SFINAE
- CRTP (Curiously Recurring Template Pattern)

## Other

```txt
Feature                 Era     Purpose
template <typename T>   C++98   Basic Generic Programming
auto return types       C++14   Compiler figures out return type
Concepts                C++20   Constraints on T (Essential!)
Deducing this           C++23   Simplify recursive lambdas & inheritance
import std;             C++23   Faster compilation (Modules)
```
