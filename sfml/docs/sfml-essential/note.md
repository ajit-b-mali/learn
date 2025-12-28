# sfml-essential

## Chapter 1: Getting Started with SFML

- Every type is suffixed by `sf::` namespace

### Creating windows

- Header file - `#include <SFML/Window.hpp>`
- `sf::Window(sf::VideoMode, title: std::string, !sf::Style, !sf::ContextSettings)`

```cpp
sf::Window window(sf::VideoMode({640, 480}), "Hello, SFML!");
// or
sf::Window window;
window.create(sf::VideoMode({640, 480}), "Hello, SFML!"); // reCreate the window
```

- **NOTE** - sf::Window::create() is called on a window, which is already open, it closes the window and reinitializes it with the new set of parameters.

#### `sf::VideoMode(sf::Vector2u{width, height}, !bitsPerPixel: int = 32)`

> Contains information about the video mode of the window(width, height, and bits per pixel)

- bits/pixel - number of bits used to represent the color of a single pixel - value of 8 would produce a monochrome result
- `sf::VideoMode.isValid() -> bool` - Check the validity of the VideoMode on system
- `sf::VideoMode::getDesktopMode() -> sf::VideoMode` - Create the window according to the system
- `sf::VideoMode::getFullScreenModes() - std::vector<sf::VideoMode>` - returns valid list of full screen modes
- ??? - fullscreen

```cpp
sf::RenderWindow window(sf::VideoMode::getDesktopMode(), "Hello, SFML!", sf::Style::None);
window.clear(sf::Color{ 28, 36, 77});
window.display();
```

#### sf::Style

- Its a bit mask

- `sf::Style::None`         - The window doesn't have any decorations, and it cannot be combined with any other style
- `sf::Style::Titlebar`     - This adds a titlebar
- `sf::Style::Resize`       - This adds a maximize button. This also enables the window to be manually resized
- `sf::Style::Close`        - This adds a close button
- `sf::Style::Fullscreen`   - This launches the window in fullscreen mode. Note that this cannot be combined with any other style and requires a valid video mode
- `sf::Style::Default`      - This combines Titlebar, Resize, and Close. This is the default style

- Combining styles - `sf::Uint32 style = sf::Style::Titlebar | sf::Style::Close`

#### sf::ContextSettings

> For underling OpenGL settings

- depthBits: This refers to the number of depth buffer bits
- stencilBits: This refers to the number of stencil buffer bits
- antialiasingLevel: This refers to the requested number of multisampling levels
- majorVersion and minorVersion: These refer to the requested version of OpenGL

- see [Chapter 5 for more](#chapter-5-exploring-a-world-of-sound-and-text)

#### Manipulate Mouse Cursor

- `sf::Window.setMouseCursorVisible(bool) -> void` - sets cursor visibility on or off
- Useful for games that don't use a cursor, or when we want to change the image of the cursor to something different to the default

#### Other

- `sf::Window.setTitle()`

### The game loop

> Every game must have a game loop otherwise game will end in first iteration

```cpp
// Game loop
while (window.isOpen())
{
    /* Game loop stages:

    1. Handle input - hangle events from input devices(direct key query) and the window(capturing events)
    2. Update frame - update objects in the scene
    3. Render frame - render objects from the scene onto the window

    */
}
```

### Event handling

- ??? - examples of all events

1. Using sf::Window.pollEvent()

    ```cpp
    while (const std::optional<sf::Event> event = window.pollEvent())
    {
        if (event->is<sf::Event::Closed>())
            // handle close event, ask them if they are sure first
        else if (const auto& key = event->getIf<sf::Key::Pressed>())
            // hangle key press, auto? reference? for what?
    }
    ```

2. Using sf::Window.handleEvents() ???

3. Using sf::Window.waitEvent()

    - which blocks the thread until an event is received
    - Useful on UI application, require the user to do something before the application can continue, handle the input on another thread only that thread will be blocked.

#### Window related events v2

- Event::Closed - None - This event is triggered when the OS detects that the user wants to close a window—the close button, key combination, and so on.

- Event::Resized - Event::size holds the new size of the window - This event is triggered when the OS detects that the window has been resized manually, or when Window::setSize() has been used.

- Event::LostFocus/Event::GainedFocus - None - This event is triggered when the window loses or gains focus. Windows which are out of focus don't receive keyboard events.

#### Keyboard related events

- Event::KeyPressed/Event::KeyReleased - Event::key holds the ressed/released key - This event is triggered when a single button is pressed or released on a focused window.

- ??? - Event::TextEntered - Event::text holds the UTF-32 unicode value of the character - This event is triggered every time a character is typed. This produces a printable character from the user input, and is useful for text fields.

- ??? - v3 - handle key events
- ??? - how to handle Key press and text entered simultaneously

#### Mouse related events

- Event::MouseMoved - Event::mouseMove holds the new mouse position - This event is triggered when the mouse changes its position inside the window.

- Event::MouseButtonPressed/Event::MouseButtonReleased - Event::mouseButton holds the pressed/released button and the mouse position - This event is triggered when a mouse button is pressed inside a window. Five buttons are currently supported—left, right, middle, extra button 1, and extra button 2.

- Event::MouseWheelMoved - Event::mouseWheel holds the delta ticks of the wheel and the mouse position - This event is triggered when the scroll wheel moves inside a window.

#### Joystick related events

- Event::JoystickConnected/Event::JoystickDisconnected - Event::joystickConnect holds the ID of the joystick just connected/disconnected - This event is triggered when a joystick connects or disconnects.

- Event::JoystickButtonPressed/Event::JoystickButtonReleased - Event::joystickButton holds the number of the button pressed and the joystick ID - This is triggered when a button on a joystick is pressed. SFML supports a maximum of 8 joysticks with up to 32 buttons each.

- Event::JoystickMoved - Event::joystickMove holds the moved axis, the new axis position, and the joystick ID - This is triggered when an axis of a joystick is moved. The move threshold can be set via Window::setJoystick::Threshold(). SFML supports up to 8 axes.

### Shape rendering and transformations

#### sf::RenderWindow

- `#include <SFML/Graphics.hpp>`
- Derived from sf::Window and adds the drawing functionality

```cpp
// Render Cycle
window.clear()      // clear canvas
window.draw()       // draw on canvas
window.dispaly()    // display canvas, swap the buffers
```

- Canvas which we are rendering on is double buffered
- `sf::RenderWindow.clear(!color: sf::Color = sf::Color::Black)`
- `sf::RenderWindow.setFramerateLimit(int)` - limit the frames to approximated value
- `sf::RendeeWindow.display()` - swap the buffers, block the thread.

#### Shape drawing

1. Create drawable object

    ```cpp
    sf::CircleShape circle(50.f);
    sf::RectangleShape rect(sf::Vector2f(50.f, 50.f));
    ```

2. Set it settings

    ```cpp
    circle.setFillColor(sf::Color::Red);
    circle.setOutlineColor(sf::Color::White);
    circle.setOutlineThickness(3);

    rect.setFillColor(sf::Color::Green);
    ```

3. Draw on canvas

- ??? - concave shape by Polygon triangulation

#### Shape transformation

- `sf::Transformable.setPosition(sf::Vector2f(x, y))`
- `sf::Transformable.setRotation(sf::Angle)`
- `sf::Transformable.setScale(sf::Vector2f(x, y))`
- `sf::Transformable.move(sf::Vector2f(x, y))`
- `sf::Transformable.rotate(sf::Angle)`
- `sf::Transformable.setOrigin(sf::Vector2f(x, y))`

## Chapter 2: Loading and Using Textures

### Loading textures

- Texture ? They are stored in GPU's memory ?

#### sf::Image vs sf::Texture

- Both holds the an array of pixels
- sf::Image - handles image loading, saving, pixel manipulation
- sf::Texture - used for rendering

- **NOTE** - load an image from a ile and modify it a bit, we can then create a Texture from that Image. However, if we then want to change the Texture object again, we have to download it to Image, process it however we like, and only then upload it again as Texture. This whole process can be expensive, and we should avoid doing it in critical sections of the code

#### sf::Image v2

1. Create image of single color(default to sf::Color::Black)

    ```cpp
    // create a 50 x 50 image and ill it with red color
    sf::Image image;
    image.create(50, 50, sf::Color::Red);
    ```

2. Create image from array of sf::Uint8

    - Images can also be created by passing an array of pixels directly
    - The array must hold elements of the type Uint8, which is a single byte of memory
    - Since Image::create() requires the colors to be in an RGBA format, we need to make sure that the array holds exactly 4 bytes for each color (1 byte per color component)
    - Every consecutive 4 bytes represents a pixel of the image grid, which is laid out as rows by columns

    ```cpp
    const unsigned int kWidth = 5, kHeight = 5;

    sf::Uint8 pixels[kWidth * kHeight * 4] =
    {
        255, 255, 255, 255, // white
        0, 0, 0, 255,       // Black
        255, 0, 0, 255,     // Red
        128, 128, 128, 255, // Gray
        // ...all other pixels
    }

    sf::Image image;
    image.create(kWidth, kHeight, pixels);
    ```

3. Load image from file

    ```cpp
    sf::Image image;
    if (!image.loadFromFile("myImage.png"))
        return -1;
    ```

    - supported     - .bmp, .png, .tga, .gif, .hdr, .pic, .jpg
    - unsupported   - .jpeg

    - try to load an image with a different ile format, or the given file does not exist, Image::loadFromFile() returns false and prints a message in the console: `Failed to load image "myImage.png". Reason : Unable to open file

4. From texture

    - `sf::Texture.copyToImage()`
    - careful where we call this though, since it is a slow operation which copies data from the GPU to the RAM

- Recommended that we use lossless ile formats, such as PNG, to create a high-quality experience for the user. Lossy formats such as JPEG will degrade the quality of the image while proving greater compression. We should only consider using JPEGs when the program size matters, or we are not concerned with the quality of the images. For example, we can also choose to use JPEGs for large images (such as backgrounds) with a carefully selected compression level that will save us a lot of space, while providing minimal quality degradation

- `sf::Image.getPixel()`
- `sf::Image.setPixel()`
- `sf::Image.getPixelPtr()` - Returns the beginning of the image
- `sf::Image.flipHorizotally()` - Flip the pixels horizontally
- `sf::Image.flipVertically()` - Flip the pixel vertically
- `sf::Image.saveToFile(std::string)` - .bmp, .png, .tga and .jpg

#### sf::Texture

1. Load texture from file

    ```cpp
    sf::Texture texture;
    if (!texture.loadFromFile("myTexture.png"))
        return -1;

    // U can opt to load small section of image
    if (!texture.loadFromFile("myTexture.png", sf::IntRect({0, 0}, {32, 32})))
        return -1;
    // loads the whole image and only then creates a texture from the speciied rectangle
    ```

2. From sf::Image

    ```cpp
    sf::Image image;
    image.create(50, 50, sf::Color::Red);

    sf::Texture texture;
    texture.loadFromImage(image);
    ```

3. Using create

    - Same as sf::Image
    - careful with the dimensions we provide for the texture, since all existing graphics cards have limits for the texture size
    - `sf::Texture::getMaximumSize() -> int` - maximum possible size of texture on the machine
    - If we want maximum compatibility from our program, we have to take the extra effort to use only textures, which have sizes equal to the power of 2 (32, 64, 256, 1024, and so on).

### Rendering shapes with textures

- `shape.setTexture(&texture)`
- As we send the pointer we need to be careful of dangling pointer - see last chapter resource management techniques
- When we place a texture on RectangleShape, it tries to it into the specifed rectangle by scaling itself up or down
- To avoid this us `texture.getSize()`

```cpp
sf::Vector2u textureSize = texture.getSize();
float rectWidth = static_cast<float>(textureSize.x);
float rectHeight = static_cast<float>(textureSize.y);
sf::RectangleShape rectShape({rectWidth, rectHeight});
rectShape.setTexture(&texture);
```

- Can also be mapped to other shapes but they will be cropped
- Texture can also be repeated multiple times - `texture.setRepeated(bool)` and `shape.setTextureRect(sf::IntRect({x, y}, {w, h}))`

```cpp
sf::Texture texture;
texture.loadFromFile("tile.png");
// Set the texture in repeat mode
texture.setRepeated(true);

sf::RectangleShape rect({128 * 3, 221 * 2});
// Bigger texture rectangle than the size of the texture
rect.setTextureRect(sf::IntRect({0, 0}, {128 * 3, 221 * 2}));
rect.setTexture(&texture);
```

- `texture.setSmooth(bool)` - effect is mostly visible when a texel (a pixel of a texture) cannot be directly mapped to a pixel on the screen(scaling, offsetting by noninteger values, and so on)

- Texture vs Image vs Sprite

### What is a sprite?

#### Shapes vs Sprites

- Shape can be render without texture but Sprite must have texture
- Sprites dimensions are automatically controlled by texture, but Shape's dimensions need to be manually controlled
- Sprites are always rectangles
- `sf::Sprite.setColor()` - the texture gets its color multiplied by the selected color, same as `shape.setFillColor()`
- The main reason - simplicity

```cpp
sf::Sprite sp(texture);
```

- sf::Sprite derived from sf::Transformable and sf::Drawable
- AKA sf::Sprite == sf::RectangleShape, with more control over texture;

- **NOTE** - `sf::RenderWindow.draw()` takes the object which are derived from `sf::Drawable`, so create our own classes that inherit from Transformable or/and Drawable

- Sprite::getLocalBounds() without transform, Sprite.getGlobalBounds() with transform -> AABB

### Managing resources

```cpp
// bad code
sf::Sprite createSprite(std::string const& filename)
{
    sf::Texture texture;
    texture.loadFromFile(filename)l

    return sf::Sprite(texture); // texture destroyed
}
```

- To avoid this we need a dedicated manager, so create a AssetManager which will load, hold, and destroy all assets
- see [project AssetManager](./projects/AssetManager)

## Chapter 3: Animating Sprites

### Capturing time

- sf::Time - holds a duration
  - sf::seconds(), sf::miliseconds(), sf::microseconds() -> sf::Time
  - sf::asSeconds(), sf::asMiliseconds(), sf::asMicroseconds() -> float/int32_t/int64_t

- sf::Clock - OS clock
  - sf::Clock.getElapsedTime()
  - sf::Clock.restart()

```cpp
sf::Clock clock;
float dt = clock.restart.asSeconds();
```

### Sprites in action



### Building an animator

## Chapter 4: Manipulating a 2D Camera

### What is a camera?

### Manipulating cameras with sf::View

### What is OpenGL?

### Using OpenGL inside SFML

## Chapter 5: Exploring a World of Sound and Text

### Audio module – overview

### Sound versus music

### Audio in action

### sf::SoundSource and audio in 3D

### Getting started with sf::Text

## Chapter 6: Rendering Special Effects with Shaders

### sf::RenderTarget and sf::RenderWindow

### Rendering directly to a texture

### Shader programming

### Combining it all together

## Chapter 7: Building Multiplayer Games

### Understanding networking

### Transport layer – TCP versus UDP

### Non-blocking sockets

### Exchanging packets

### Putting it all into practice

## Questions

- `sf::sleep()` ? std alternatives ?
- `sf::seconds()` ? std alternatives ?
- bit mask ?
- `sf::String` ?
- `sf::Color` ?
- Valid Enums ?

## Other apis

- `sf::sleep(sf::seconds(3)); // pause the program for 3 seconds`
- Shapes
- `sf::Keyboard::isKeyPressed(sf::Keyboard::Key)`
- intersection

### Color

### sf::Vector2/3

### Angle

### Everything about event
