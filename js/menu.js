var menuState = {

    create: function() {

        //game.add.image(0, 0, 'background');
        
        var startLabel = game.add.text(game.world.centerX, game.world.height-80,
            'press spacebar to start',
            {font: '25px Arial', fill: '#ffffff'});
        startLabel.anchor.setTo(0.5, 0.5);

        var nameLabel = game.add.text(game.world.centerX, 80,
            'Platformer Game',
            {font: '50px Arial', fill: '#ffffff'});
        nameLabel.anchor.setTo(0.5, 0.5);

        var startKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        startKey.onDown.addOnce(this.start, this);
    },

    start: function () {
        game.state.start('play');
    }

};