var loadState = {

    preload: function () {
        // show "loading..."
        var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...');
        loadingLabel.anchor.setTo(0.5, 0.5);

        // show progress bar
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);

        // load assets
        game.load.image('player', 'assets/player.png');
        game.load.image('wall', 'assets/wallBlock.png');
        game.load.image('background', 'assets/background.png');
    },

    create: function () {
        game.state.start('menu');
    }

};