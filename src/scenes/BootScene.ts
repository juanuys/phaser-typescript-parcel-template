import Phaser from 'phaser'
import eng from "../engine/geom"


export default class BootScene extends Phaser.Scene {
    constructor() {
        super({key: 'boot'})
    }

    preload() {
        const bg = this.add.rectangle(eng.x(), eng.y(), eng.w(0.5), eng.h(0.05), 0x666666)
        const bar = this.add.rectangle(bg.x, bg.y, bg.width, bg.height, 0xffffff).setScale(0, 1)

        this.load.on('progress', function (progress) {
            bar.setScale(progress, 1)
        })
    }

    create() {
        this.add.text(eng.x(), eng.y(0.77), '< click to start >', {
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
