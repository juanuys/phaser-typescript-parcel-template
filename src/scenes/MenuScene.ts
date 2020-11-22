import Phaser from 'phaser'
import eng from "../engine/geom"


export default class MenuScene extends Phaser.Scene {

    constructor() {
        super({key: 'menu'})
    }

    create() {
        this.add.text(eng.x(), eng.y(), 'SuperGame\n\n< play >', {
            align: 'center',
            fill: 'white',
            fontFamily: 'sans-serif',
            fontSize: 48,
        })
            .setOrigin(0.5, 0)

        this.input.on('pointerdown', function () {
            this.scene.start('play')
        }, this)
    }
}
