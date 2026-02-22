```cpp
/**
 *  @brief An example program
 * 
 *  @return return 0, when successfully executed
 */
int main(){}
```

- `ctrl + p`
- `>open walkthrough` -- from extension screen
- The `code .` command opens VS Code in the current working folder, which becomes your "workspace"
- `ctrl + shift + e` -- open explorer
- `ctrl + s` -- save file
- `ctrl + shift + x` -- extension view
- `ctrl + shift + p` -- command palette -- >C/C++...
- (variable reference)[https://code.visualstudio.com/docs/editor/variables-reference]

## .vscode

- special folder for vscode configuration
- tasks.json (compiler build settings)
- launch.json (debugger settings)
- c_cpp_properties.json (compiler path and IntelliSense settings)

## c_cpp_properties.json
- `>edit configuration`
- we can change configuration for different architecture from edit configuration
- or selecting option from bottom left corner like -- Win32

## tasks.json

    This task tells g++ to take the active file `${file}`, compile it, and create an executable file in the current directory `${fileDirname}` with the same name as the active file but without an extension `${fileBasenameNoExtension}`, resulting in helloworld for our example.

- terminal -> configure default build task

- `label` -- value is what you will see in the tasks list; you can name this whatever you like
- `detail` -- value is what you will see as the description of the task in the tasks list
- `command` -- specifies the program to run, g++
- `args`
    - a array which specifies the command-line arguments that will be passed to g++
    - These arguments must be specified in the order expected by the compiler
- `problemMatcher` -- select output parser for finding errors and warning in the output
- `group`
    - `isDefault`
        - `true` -- this task will run when selected run build task

- build multiple C++ files by using an argument like `${workspaceFolder}/*.cpp` instead of `${file}` -- This will build all .cpp files in your current folder
- the play button will read from `tasks.json` to figure out how to build and run your program

- the main file should be active file because build task work with only active file
- terminal -> run build task (it is default)
- to add more tasks terminal -> configure task

You can define multiple build tasks in tasks.json, and whichever task is marked as the default will be used by the play button. In case you need to change the default compiler, you can run Tasks: Configure default build task. Alternatively you can modify the tasks.json file and remove the default by replacing this segment:

    "group": {
        "kind": "build",
        "isDefault": true
    },
Copy
with this:

    "group": "build",

- modify the output filename by replacing "${fileDirname}/${fileBasenameNoExtension}" with a hard-coded filename (for example 'helloworld.out')

## debug

- debug configuration
- run -> add configuration -> choose debugger environment -> choose predefined debugging configuration
- Set a breakpoint by clicking on the editor margin or using F9 on the current line
- From the drop-down next to the play button, select Debug C/C++ File
- play button has two modes: Run C/C++ File and Debug C/C++ File
- If you already have a launch.json file in your workspace, the play button will read from it when figuring out how run and debug your C++ file. If you don’t have launch.json, the play button will create a temporary “quick debug” configuration on the fly, eliminating the need for launch.json altogether!

### launch.json
- `program` -- which program to debug
- `stopAtEntry`
    - false -- only stop at breakpoint
    - true -- stop at main
- `MIMode` -- specifies vscode use either `gdb`/`lldb`
- `miDebuggerPath` -- specifies the path to debugger, If left empty vscode will first search for it
- `miDebuggerArgs` -- additional arguements to debugger
- `F5` -- to start debugging
- debugger options
    1. continue -- will continue the program untill next breakpoint
    2. step over -- go to next line of code skipping function call
    3. step into -- step into a function
    4. step out -- step out a function
    5. restart -- restart the debug session
    6. stop -- stop debugging session
- run and debug window
    - variable -- see current value, change value at run time
    - watch -- always seen even go out of scope
    - call stack -- function call stack, variables are directly related to this

## Reusing your C++ configuration

    VS Code is now configured to use gcc on Linux. The configuration applies to the current workspace. To reuse the configuration, just copy the JSON files to a .vscode folder in a new project folder (workspace) and change the names of the source file(s) and executable as needed

NOTE -- default files of tasks.json, launch.json and c_cpp_properties.json are available on official site

# CMake Tool

CMake is an open-source, cross-platform tool that uses compiler and platform independent configuration files to generate native build tool files specific to your compiler and platform.

The CMake Tools extension integrates Visual Studio Code and CMake to make it easy to configure, build, and debug your C++ project.

- What is build system?
    - main.cpp
    - additional source files
    - additional header files
    - new features
    - new dependencies
    - external source code
    - extra compiler flags for cross platform

1. Create a CMakeLists.txt file
    1. Open the Command Palette (Ctrl+Shift+P) and run the CMake: Quick Start command
    2. select c++
    3. select executable for .cpp/select library for .cpp and .h
    4. select CPack/CTest ?
2. Create a CMakePresets.json
    1. Select Add a New Preset and Create from Compilers.
    2. Select the compiler you want to use
    3. Enter a name for this new preset.

After completing these steps, you should now have a complete hello world CMake project that contains the following files: main.cpp, CMakeLists.txt, and CMakePresets.json

A variant contains instructions for how to build your project. By default, the CMake Tools extension provides four variants, each corresponding to a default build type: Debug, Release, MinRelSize, and RelWithDebInfo. These options do the following:

- Debug : disables optimizations and includes debug info
- Release : Includes optimizations but no debug info
- MinRelSize : Optimizes for size. No debug info
- RelWithDebInfo : Optimizes for speed and includes debug info

To select a variant, open the Command Palette (Ctrl+Shift+P) run the CMake: Select Variant command.

Now that you've selected your configuration settings via presets or kits/variants, open the Command Palette (Ctrl+Shift+P) and run the CMake: Configure command to configure your project. This generates build files in the project's build folder using the configurations you selected.

After configuring your project, you're ready to build. Open the Command Palette (Ctrl+Shift+P) and run the CMake: Build command, or select the Build button from the status bar.

You can select which targets you'd like to build by selecting CMake: Set Build Target from the Command Palette. By default, CMake Tools builds all targets. The selected target will appear in the Project Status view in the CMake Tools sidebar underneath the Build node and can be set from there as well.

To run and debug your project, open main.cpp and put a breakpoint on the std::cout line. Then open the Command Palette (Ctrl+Shift+P) and run CMake: Debug. The debugger will stop on the std::cout line:


we can use f2 to change variables name