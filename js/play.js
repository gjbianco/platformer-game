var playState = {

  create: function () {
    game.stage.backgroundColor = '#3498db';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = game.add.sprite(250, 170, 'player');
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 1000;

    this.floor = game.add.sprite(250, 230, 'wall');
    this.floor.scale.setTo(1.5, 1);
    game.physics.arcade.enable(this.floor);
    this.floor.body.immovable = true;

    this.cursor = game.input.keyboard.createCursorKeys();
    this.wasd = {
      up: game.input.keyboard.addKey(Phaser.Keyboard.W),
      down: game.input.keyboard.addKey(Phaser.Keyboard.S),
      left: game.input.keyboard.addKey(Phaser.Keyboard.A),
      right: game.input.keyboard.addKey(Phaser.Keyboard.D)
    };
  },

  update: function () {
    game.physics.arcade.collide(this.player, this.floor);
    this.movePlayer();
  },

  movePlayer: function () {
    if (this.cursor.left.isDown || this.wasd.left.isDown) {
      this.player.body.velocity.x = -200;
    } else if (this.cursor.right.isDown || this.wasd.right.isDown) {
      this.player.body.velocity.x = 200;
    } else {
      this.player.body.velocity.x = 0;
    }

    if ((this.cursor.up.isDown || this.wasd.up.isDown)
        && this.player.body.touching.down) {
      this.player.body.velocity.y = -300;
    }
  }

};
