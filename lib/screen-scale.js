class ScreenScaleTool {
    constructor(inner_square_size) {
        // Screen variables
        const screen_width = window.innerWidth;
        const screen_height = window.innerHeight;
        const screen_center = {
            x: screen_width / 2,
            y: screen_height / 2
        }
        // Scaling information
        const ratio = screen_width / screen_height;
        const wide = ratio > 1;
        // Scaled variables
        const scaled_width = wide ? inner_square_size * ratio : inner_square_size;
        const scaled_height = wide ? inner_square_size : inner_square_size / ratio;
        const scaled_center = {
            x: scaled_width / 2,
            y: scaled_height / 2
        };
        // Create properties of constructed object
        // Screen object is the size and positioning of the actual screen
        this.screen = {
            width: screen_width,
            height: screen_height,
            center: screen_center
        };
        // Scaled object is the size and positioning in game units (scaled from screen)
        this.scaled = {
            width: scaled_width,
            height: scaled_height,
            center: scaled_center
        };
        // Ratio is the ratio of the screen width to the screen height
        this.ratio = ratio;
        // Wide is true if the screen is wider than it is tall
        this.wide = wide;
    }
}
