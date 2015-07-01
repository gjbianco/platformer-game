var mainState = {

  preload: function () {
    game.load.image('player', 'assets/player.png');
  },

  create: function () {
    game.stage.backgroundColor = '#3498db';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = game.add.sprite(250, 170, 'player');
  },

  update: function () {
  }

};

var game = new Phaser.Game(400, 300, Phaser.AUTO, 'gameDiv');

game.state.add('main', mainState);
game.state.start('main');
