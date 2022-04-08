import {Types} from 'phaser';
import {MainScene} from './scenes/Main';

export const gameConfig: Types.Core.GameConfig = {
    title: 'Sample',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: '#000000',
    scene: new MainScene(),
};
