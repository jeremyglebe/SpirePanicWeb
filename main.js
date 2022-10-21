/** @type {ScreenScaleTool} Handles scaling with unknown screen ratios */
let SCREEN = new ScreenScaleTool(720);

/** @type {Phaser.Types.Core.GameConfig} Configuration for the game */
const config = {
    type: Phaser.AUTO,
    width: SCREEN.scaled.width,
    height: SCREEN.scaled.height,
    parent: 'game',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        ScTitleMenu,
    ]
};
/** @type {Phaser.Game} Instantiate the game and pass the configuration */
const game = new Phaser.Game(config);