import {sceneConfig} from './sceneConfig';
import {BodyRectangle} from './types';

export class MainScene extends Phaser.Scene {
    private square: BodyRectangle;

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as BodyRectangle;
        this.physics.add.existing(this.square);
    }

    public update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();

        if (cursorKeys.up.isDown) {
            this.square.body.setVelocityY(-500);
        } else if (cursorKeys.down.isDown) {
            this.square.body.setVelocityY(500);
        } else {
            this.square.body.setVelocityY(0);
        }

        if (cursorKeys.right.isDown) {
            this.square.body.setVelocityX(500);
        } else if (cursorKeys.left.isDown) {
            this.square.body.setVelocityX(-500);
        } else {
            this.square.body.setVelocityX(0);
        }
    }
}
