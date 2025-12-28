cmake_minimum_required(VERSION 4.1)
project(ColorClash)

find_package(SFML 3 REQUIRED COMPONENTS Graphics Window System)
add_executable(app main.cpp)
target_link_libraries(app PRIVATE SFML::Graphics)
