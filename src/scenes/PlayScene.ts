import Phaser from 'phaser'
import eng from "../engine/geom"


export default class PlayScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'play',
            physics: {
                arcade: {
                    gravity: {y: 300},
                    debug: false,
                },
            }
        })
    }

    create() {

        this.add.text(eng.x(), eng.y(), 'Pew pew... (click anywhere)', {
            align: 'center',
            fill: 'white',
            fontFamily: 'sans-serif',
            fontSize: 48,
        })
            .setOrigin(0.5, 0)

        this.input.on('pointerdown', function () {
            this.scene.start('end')
        }, this)

        // up up down down left right left right B A
        const konamiCode = this.input.keyboard.createCombo([ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65  ], { resetOnMatch: true })

        this.input.keyboard.on('keycombomatch', function (event) {
            console.log("yay konami")
        }, this)

    }

    update() {
    }
}
