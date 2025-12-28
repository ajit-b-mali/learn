# learn CMake with gemini

## Questions

- `VERSION`?
- cmake-gui?
- vcpkg.json? cmake preset?
- vcpkg manifest mode? vs classic mode?

## Using CMake

- **File** - `CMakeLists.txt` -> the recipe for creating platform specific build system (linux -> MakeFile, Windows -> Visual Studi, Mac -> XCode)
- **Configure** - `cmake -S . -B <build-dir>` -> take source from current directory . and put the Build files in a directory named \<build-dir\> usually `build`
- **build** - `cmake --build build`

## Default Commands

1. `cmake_minimum_required()`

    - This command should be the first line
    - Tells what CMake minimum version needed to understand the instructions
    - e.g. `cmake_minimum_required(VERSION 3.10)`

2. `project()`

    - Set the name for entire project
    - Also set language and version of project
    - e.g. `project(MyApp)`

3. `add_executable()`

    - Tells CMake to create an executable program
    - arguements: 1. name of program, 2. source files
    - e.g. `add_executable(my_program main.cpp)`

## adding multiple source files

1. simple way

    - List all source files separated by space
    - e.g. `add_executable(MyApp main.cpp math.cpp)`

2. more manageble way

    - Create a variable for list of source files
    - e.g.

    ```cmake
    set(SOURCES
        main.cpp
        math.cpp
    )

    add_executable(MyApp ${SOURCES})
    ```

## Variables

- Simply a named placeholder for string of text
- Creation: `set(VARIABLE_NAME "some value)`
- Usage: `${VARIABLE_NAME}`
- Cmake specific variables starts with `CMAKE_*`

## Targets

- Anything that CMake knows how to build
- e.g: `add_executable(my_app ${SOURCES})`
- `CMakeLists.txt` is cookbook, `add_executable()` is recipe for final dish, `add_library()` is recipe for ingredients that can be reused
- Once target is created, we can later attach properties like: telling it where to find header files or which library it needs to link against
- Naming convention is like `target-*()`

## Libraries

Libraries help to organize larger projects by separatig your code into reusable components.

### Static Libraries(`.o`, `.lib`)

The library's compiled code is copied into yout final executable. This makes the program a single, self-contained file, but it has larger size.

### Shared Libraries(`.so`, `.dll`, `.dylib`)

The executable doesn't contain the library's code, it just holds a link to it. The operating system loads this external library file only when the program runs. The final executable is smaller, and multiple programs can use the same shared library at the same time.

### Creating and Using a library

- `add_library()`
  - This command is just like `add_executable()`, but it creates a library instead of executable
  - Take arguemets: name of library, STATIC or SHARED, source files
  - e.g: `add_library(math_library STATIC math.cpp)`

- `target_link_libraries()`
  - Once you have a library target, you need to tell your executable to use it.
  - This command **links** one target to another
  - Arguemets: Which target you are modifying, Which library it needs, The keyword `PRIVATE` (only MyApp needs to know about math_library), i.e. it's a private dependency.
  - e.g: `target_link_libraries(MyApp PRIVATE math_library)`

### Project Stucture

```console
learnCMake/
├── CMakeLists.txt      (The main, top-level file)
├── main.cpp
└── math/
    ├── CMakeLists.txt  (The library's file)
    └── math.cpp
```

- In math/CMakeLists.txt
  - We only need to `add_library()`, no need of `cmake_minimum_required()` or `project()` as this task is of top level CMake

- In top level CMakeLists.txt
  - Here we will use `add_subdirectory()`
  - This command tells CMake to go into a folder, find the CMakeLists.txt file there, and run it
  - After it's done, any targets created in that subdirectory(like our math_library) become available to the top-level file

## Finding external packages

- `find_package()`
  - ask CMake to find the library on your system
  - `REQUIRED` keyword, which tells CMake to stop with an error if it can't find the library.
  - e.g: `find_package(Threads REQUIRED)`
  - If this command succeeds, CMake creates a special "imported target" that represents the library. For the threading library, this target is named Threads::Threads.
  - You can then link this imported target to your executable using `target_link_libraries()`, just like you would with a library you created yourself.
  - e.g: `target_link_libraries(MyApp PRIVATE Threads::Threads)`

- `include()`
  - This command is used to include and execute another CMake file
  - e.g: `include(FindPkgConfig)`

- `FetchContent_Declare()`
  - This command is part of the FetchContent module, which allows you to download and build external projects as part of your CMake build process.
  - You specify where to get the library from (like a git repository) and which version or tag to use.
  - e.g:

    ```cmake
    include(FetchContent)

    FetchContent_Declare(
        target
        GIT_REPOSITORY # URL of git repo
        GIT_TAG        # specific tag or commit
    )
    ```

- `FetchContent_MakeAvailable()`
  - After declaring the external project with `FetchContent_Declare()`, you call this command to actually download and prepare the project for building.
  - This command will download the source code, configure it, and make its targets available for linking in your project.
  - e.g: `FetchContent_MakeAvailable(target)`

### If library not found in System

1. Install it using system package manager

    ```bash
    # On Ubuntu/Debian
    sudo apt-get install libname-dev
    # On Windows with vcpkg
    vcpkg install name
    ```

2. Download and build it manually, then tell CMake where to find it using `CMAKE_PREFIX_PATH` or `CMAKE_MODULE_PATH`

    ```bash
    // To Do ??????????
    cmake -S . -B build -DCMAKE_PREFIX_PATH=/path/to/library
    ```

3. Use `FetchContent` module to download and build it automatically during your project's CMake configure step

    ```cmake
    include(FetchContent)

    # Declare where to get the library from
    FetchContent_Declare(
        target
        GIT_REPOSITORY # URL of git repo
        GIT_TAG        # specific tag or commit
    )

    FetchContent_MakeAvailable(target)

    target_link_libraries(MyApp PRIVATE target::target)
    ```

### using SFML

1. The FetchContent Approach

    ```cmake
    cmake_minimum_required(VERSION 3.16)
    project(MyAwesomeGame)

    set(CMAKE_CXX_STANDARD 17)
    set(CMAKE_CXX_STANDARD_REQUIRED ON)

    # Include the FetchContent module to enable this functionality
    include(FetchContent)

    # Declare where to find SFML
    FetchContent_Declare(
    sfml
    GIT_REPOSITORY https://github.com/SFML/SFML.git
    GIT_TAG        2.6.1 # Use an official SFML release tag
    )

    # This command downloads and prepares SFML, but doesn't build it yet
    FetchContent_MakeAvailable(sfml)

    # Create your game's executable
    add_executable(MyGame main.cpp)

    # Link your game to the SFML targets. CMake knows about these
    # because FetchContent_MakeAvailable made them.
    target_link_libraries(MyGame PRIVATE sfml-graphics sfml-window sfml-system)
    ```

2. The find_package Approach

    ```cmake
    cmake_minimum_required(VERSION 3.10)
    project(MyAwesomeGame)

    set(CMAKE_CXX_STANDARD 17)
    set(CMAKE_CXX_STANDARD_REQUIRED ON)

    # Find SFML on the user's system, requiring at least version 2.6
    # We specify the components our project needs (graphics, window, system).
    find_package(SFML 2.6 REQUIRED graphics window system)

    # If SFML was found, the SFML::sfml-graphics etc. targets are created.
    if(SFML_FOUND)
        add_executable(MyGame main.cpp)

        # Link against the imported SFML targets
        target_link_libraries(MyGame PRIVATE sfml-graphics sfml-window sfml-system)
    endif()
    ```

3. Find-or-Fetch Pattern

    ```cmake
    cmake_minimum_required(VERSION 3.16)
    project(MyAwesomeGame)

    set(CMAKE_CXX_STANDARD 17)
    set(CMAKE_CXX_STANDARD_REQUIRED ON)

    # 1. First, try to find an installed version of SFML QUIETLY.
    find_package(SFML 2.6 QUIET COMPONENTS graphics window system)

    # 2. If it was NOT found, then use FetchContent as a fallback.
    if(NOT SFML_FOUND)
    message(STATUS "SFML not found on system. Fetching from source...")
    include(FetchContent)
    FetchContent_Declare(
        sfml
        GIT_REPOSITORY https://github.com/SFML/SFML.git
        GIT_TAG        2.6.1
    )
    # Download and build SFML
    FetchContent_MakeAvailable(sfml)
    endif()

    # 3. This part of the code is now guaranteed to work, because by this
    #    point, the sfml-* targets have been created by either find_package
    #    or FetchContent.
    add_executable(MyGame main.cpp)
    target_link_libraries(MyGame PRIVATE sfml-graphics sfml-window sfml-system)
    ```

## Conditional logic

CMake can use `if()` statements to run commands only when certain conditions are met

### Example 1: Handling different OS

CMake provdes built-in variables to tell which OS is being used

Suppose you need to include a specific file only when compiling on windows, we can do like:

```cmake
# Assume MyAwesomeApp target already exists from add_executable()

if(WIN32)
    message("Configuring for Windows-specific features.")
    target_sources(MyAwesomeApp PRIVATE platform/windows_utils.cpp)

elseif(APPLE)
    message("Configuring for macOS-specific features.")
    target_sources(MyAwesomeApp PRIVATE platform/macos_utils.cpp)

elseif(UNIX)
    message("Configuring for Linux-specific features.")
    target_sources(MyAwesomeApp PRIVATE platform/linux_utils.cpp)
endif()
```

- `message()`: Prints text to the terminal during the CMake configuration step
- `target_sources()`: Adds more source files to a target after it has already been created

### Example 2: Creatig a Build Option

Create a configuration option, like a checkbox that a user can turn ON or OFF

```cmake
# Creates a boolean option that users can change.
# The text describes it, and the "ON" is the default value.
option(BUILD_TESTING "Build the project's tests" ON)

# Now, we check if that option is enabled
if(BUILD_TESTING)
    message("Test building is enabled.")
    # Here, we would add the subdirectory that contains our tests
    add_subdirectory(tests)
else()
    message("Skipping tests.")
endif()
```

When Developer runs cmake, then can now turn this option off with a command like `cmake -S . -B build -DBUILD_TESTING=OFF`

## List of commands

01. `cmake_minimum_required()`
02. `project()`
03. `add_executable()`
04. `set()`
05. `add_library()`
06. `target_link_libraries()`
07. `add_subdirectory()`
08. `if()`, `elseif()`, `endif()`, `else()`
09. `message()`
10. `target_sources()`
11. `option()`
12. `find_package()`
13. `include(FetchContent)`?
14. `FetchContent_Declare()`?
15. `FetchContent_MakeAvailable()`?

### Didn't explained

01. `target_include_directories()`
02. `target_compile_features()`
03. `target_compile_definitions()`
04. `include_directories()`
05. `link_directories()`
06. `file()`
07. `foreach()`, `endforeach()`
08. `while()`, `endwhile()`
09. `function()`, `endfunction()`
10. `macro()`, `endmacro()`
11. `install()`
12. `export()`
13. `enable_testing()`
14. `add_test()`
15. `set_target_properties()`
16. `get_target_property()`
17. `get_property()`
18. `string()`
19. `math()`
20. `list()`
21. `find_file()`
22. `find_library()`
23. `find_path()`
24. `get_filename_component()`
25. `cmake_path()`
26. `execute_process()`
27. `include()`
28. `find_program()`
29. `check_include_file()`
30. `check_library_exists()`
31. `check_cxx_source_compiles()`
32. `check_cxx_symbol_exists()`
33. `check_cxx_function_exists()`
34. `check_cxx_compiler_flag()`
35. `check_c_compiler_flag()`
36. `check_type_size()`
37. `check_struct_size()`
38. `check_member_exists()`
39. `check_linkage()`
40. `check_abstract_class()`
41. `check_cxx_source_runs()`
42. `check_c_source_compiles()`
43. `check_c_source_runs()`
44. `check_include_files()`

## List of special variables

1. CMAKE_CXX_STANDARD
2. CMAKE_CXX_STANDARD_REQUIRED
3. WIN32
4. APPLE
5. UNIX

## Keywords

1. STATIC
2. SHARED
3. PRIVATE
4. STATUS
5. REQUIRED
6. QUIET
7. COMPONENTS
8. GIT_REPOSITORY
9. GIT_TAG
