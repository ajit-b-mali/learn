cmake_minimum_required(VERSION 4.1)
project(LearnSFML LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(SFML 3 REQUIRED COMPONENTS Graphics Window System)

set(SOURCES
    src/main.cpp
    src/AssetManager.cpp
    
    inc/AssetManager.hpp
)

add_executable(app ${SOURCES})
target_link_libraries(app PRIVATE SFML::Graphics SFML::Window SFML::System)
target_include_directories(app PRIVATE inc)
