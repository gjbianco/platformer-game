var menuState = {

    create: function() {
        game.add.image(0, 0, 'background');

        var nameLabel = game.add.text(game.world.centerX, 80, 'Platformer Game');
        nameLabel.anchor.setTo(0.5, 0.5);

        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upKey.onDown.addOnce(this.start, this);
    },

    start: function () {
        game.state.start('play');
    }

};