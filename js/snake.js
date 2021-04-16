export default class Snake {
    constructor(scene) {
        this.scene = scene;
        this.timeLastMove = 0;
        this.moveInterval = 1000;

        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body = [];

        this.body.push(
            this.box = this.scene.add
                .rectangle(0, 0, 16, 16, 0xff0000)
                .setOrigin(0)
        );

        this.body.push(
            this.box = this.scene.add
                .rectangle(0, 0, 16, 16, 0xff0000ff)
                .setOrigin(0)
        );

        this.scene.input.keyboard.on('keydown', e => {
            this.keydown(e);
        });
    }

    keydown(event) {
        // if (event.keyCode == 37) { //Left
        // }
        // else if (event.keyCode == 38) { //Up
        // }
        // else if (event.keyCode == 39) { //Right
        // }
        // else if (event.keyCode == 40) { //Down
        // }
        switch (event.keyCode) {
            case 37: //Left
                this.direction = Phaser.Math.Vector2.LEFT;
                break;
            case 38: //Up
            this.direction = Phaser.Math.Vector2.UP;
                break;
            case 39: //Right
            this.direction = Phaser.Math.Vector2.RIGHT;
                break;
            case 40: //Down
            this.direction = Phaser.Math.Vector2.DOWN;
                break;
        }
    }

    update(time) {
        this.body[0].x += this.direction.x * 16;
        this.body[0].y += this.direction.y * 16;
    }

    move() {

    }
}


