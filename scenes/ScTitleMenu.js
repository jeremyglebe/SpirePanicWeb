class ScTitleMenu extends Phaser.Scene {
    constructor() {
        super('ScTitleMenu');
    }

    preload() {
        // Load background music
        this.load.audio('bg-title-menu', 'assets/audio/bg-title-menu.wav');
        // Load background image
        this.load.image('bg-title-menu', "assets/images/bg-title-menu.png");
    }

    create() {
        // Play the background music
        this.sound.play('bg-title-menu', { loop: true });
        /** @type {Phaser.GameObjects.Image} Background image of the title menu */
        let bg = this.add.image(SCREEN.scaled.center.x, SCREEN.scaled.center.y, 'bg-title-menu');
        // If game width is greater than image width, scale image to fit game width
        if (SCREEN.scaled.width > bg.width) {
            bg.setScale(SCREEN.scaled.width / bg.width);
        }
        // If game height is greater than image height, scale image to fit game height
        if (SCREEN.scaled.height > bg.height) {
            bg.setScale(SCREEN.scaled.height / bg.height);
        }
    }
}