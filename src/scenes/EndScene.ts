import Phaser from 'phaser'
import eng from "../engine/geom"


export default class EndScene extends Phaser.Scene {
    constructor() {
        super({key: 'end'})
    }

    create() {

        this.add.text(eng.x(), eng.y(), 'Game Over\n\n< menu >', {
            align: 'center',
            fill: 'white',
            fontFamily: 'sans-serif',
            fontSize: 48,
        })
            .setOrigin(0.5, 0)

        this.input.on('pointerdown', function () {
            this.scene.start('menu')
        }, this)
    }
}
