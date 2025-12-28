cmake_minimum_required(VERSION 4.1)
project(Animator)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(Animator
    src/main.cpp
    src/Animator.cpp
    src/AssetManager.cpp

    inc/Animator.hpp
    inc/AssetManager.hpp
)
target_include_directories(Animator PRIVATE inc)

find_package(SFML 3 REQUIRED COMPONENTS Graphics Window System)
target_link_libraries(Animator PRIVATE SFML::Graphics SFML::Window SFML::System)
