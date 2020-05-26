sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Burger.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    music.baDing.playUntilDone()
})
let Burger: Sprite = null
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(13)
let Player_1 = sprites.create(img`
1 1 1 1 f f 7 7 7 7 f f f f f f 
1 1 1 1 f f 7 7 7 7 f f f f f f 
1 1 1 1 f f 7 7 7 7 f f 1 1 1 1 
1 1 1 1 f f 7 7 7 7 f f 1 1 1 1 
1 1 1 1 f f 7 7 7 7 f f 1 1 1 1 
1 1 1 1 f f 7 7 7 7 f f 1 1 1 1 
f f f f f f 7 7 7 7 f f 1 1 1 1 
f f f f f f 7 7 7 7 f f 1 1 1 1 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 2 2 2 2 2 2 2 2 2 2 7 7 7 
7 7 7 2 2 2 2 2 2 2 2 2 2 7 7 7 
7 7 7 2 2 3 3 3 3 3 3 2 2 7 7 7 
7 7 7 2 2 3 3 3 3 3 3 2 2 7 7 7 
7 7 7 2 2 1 1 1 1 1 1 2 2 7 7 7 
7 7 7 2 2 1 1 1 1 1 1 2 2 7 7 7 
`, SpriteKind.Player)
controller.moveSprite(Player_1)
Burger = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food)
info.startCountdown(20)
forever(function () {
    music.playMelody("C E G E C E G E ", 120)
    music.playMelody("F A C5 A F A C5 A ", 120)
    music.playMelody("C E G E C E G E ", 120)
    music.playMelody("F F E E D D D - ", 120)
})
forever(function () {
    let Bad_Guy: Sprite = null
    Player_1.follow(Bad_Guy)
})
