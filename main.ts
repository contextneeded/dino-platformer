enum ActionKind {
    Walking,
    Idle,
    Jumping,
    standingRight,
    standingLeft
}
function createStandAnimation () {
    animStandRight = animation.createAnimation(ActionKind.standingRight, 1000)
    animStandRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 b b 3 3 c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        c c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c b c . . . 
        . . . . . c b 5 5 d c c c . . . 
        `)
    animStandRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . c d 5 5 5 5 5 5 b 1 b b c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c c d d b 5 5 d c c c c . . . 
        . . . c c b 5 5 c c c b b c . . 
        . . . . . c 5 5 d c c c c c . . 
        `)
    animStandLeft = animation.createAnimation(ActionKind.standingLeft, 1000)
    animStandLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c c 3 3 b b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c c 
        . . . c b c c b 5 5 b c c c . . 
        . . . c c c d 5 5 b c . . . . . 
        `)
    animStandLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d c c . 
        . . c b b c c c 5 5 b c c . . . 
        . . c c c c c d 5 5 c . . . . . 
        `)
    animation.attachAnimation(dino, animStandRight)
    animation.attachAnimation(dino, animStandLeft)
}
function createMap () {
    dino = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 b b 3 3 c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        c c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c b c . . . 
        . . . . . c b 5 5 d c c c . . . 
        `, SpriteKind.Player)
    controller.moveSprite(dino, 50, 0)
    dino.ay = 290
    scene.placeOnRandomTile(dino, 9)
    scene.cameraFollowSprite(dino)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dino.vy = -140
    if (dino.isHittingTile(CollisionDirection.Bottom)) {
        dino.vy = -140
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `)
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(dino, ActionKind.Walking)
})
function createEggs () {
    tile_list = scene.getTilesByType(5)
    for (let value of tile_list) {
        Egg = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f 1 5 5 f . . . . . . . 
            . . . f 1 5 5 5 5 f . . . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . f 5 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 f . . . . . 
            . . f 5 5 5 5 5 5 5 f . . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value, Egg)
        animation.runMovementAnimation(
        Egg,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 b b 3 3 c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        c c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c b c . . . 
        . . . . . c b 5 5 d c c c . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.jumpUp.play()
})
function createDino () {
    scene.setBackgroundColor(9)
    scene.setTileMap(img`
        9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 
        . . . . 5 . . . . . . . . . . . . . 5 . 7 . . . . . . . . . e 7 
        . . 5 . . . . . . . 5 5 . . . . . . . . e . . . 5 . . . 7 . . e 
        . . . . . . . . . . . . . . . . . 7 . . e 7 . . . . . . e . . . 
        . . . 7 . 7 7 7 . . . . . 5 . . 7 e . . e e . . . . . 7 e . . . 
        7 7 2 e 2 e e e 2 7 7 7 . . . . e e 2 2 e e . . . 7 e e e 2 e a 
        e e e e e e e e e e e e 2 2 e e e e e e e e 2 2 2 e e e e e e e 
        `, TileScale.Sixteen)
    scene.setTile(14, img`
        . . . . d . . . . d . e . . d 9 
        . . e e d . . . . d . . e . d . 
        d e e d d d d d d d d d e d d d 
        . e . d . 7 . d . . 7 7 . d . . 
        . 7 . d . . 7 d . . . 7 7 d . . 
        d 7 d d d d d d d d d d 7 d d d 
        . d 7 . . d . 7 7 d . . 7 . d . 
        . d . . . d . . 7 9 . . 7 . d . 
        d d d d d d d d d d d 7 7 d d d 
        . . . d . . e e d . . 7 . d . . 
        . . 7 d . . . e d . . 7 e d . . 
        d d d 7 d d d d d d d d e e d d 
        d . . . d . . . . d . . e e d . 
        d . . . d . . . . d . e . . d . 
        d d d d d d d d d d d d d d d d 
        . . e d . . d . . d . . . d . 7 
        `, true)
    scene.setTile(7, img`
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 5 7 
        7 5 7 7 7 7 7 5 7 7 e 7 7 5 7 7 
        7 7 7 7 7 7 7 5 5 7 7 7 1 7 d 7 
        7 7 7 7 d 7 7 d 5 7 7 1 7 7 d e 
        7 e d e d d 7 d d d 7 d e e d e 
        e d d d d d d d d d d d d e d d 
        d d d d d d 1 d d d d e e d 1 1 
        d 7 7 d d d 1 1 d d d e e d d 1 
        d 7 7 d d d d d d d d d d d d d 
        7 7 d d d 1 d d d d d d d d d d 
        7 7 d d d d 1 1 d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d 1 d d d 
        d d e e e d d d d d d d 1 1 d d 
        d d d d e e e d d d d d d d 7 7 
        d d d d d d d e e d d d d d 7 7 
        `, true)
    scene.setTile(2, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 4 2 f . . . . . . 
        . f f f f 4 4 2 f f f f . . . f 
        f f 5 5 f f f 2 f 2 5 5 f f f 5 
        4 5 f f 2 4 f f f 4 4 5 f 2 f 2 
        2 4 5 f f 4 f f f f f f f 2 f 4 
        4 4 4 2 2 f f 2 5 4 2 2 f f 5 5 
        2 f f f f f 4 5 4 2 2 f f f f 5 
        f 2 2 f 2 f f f 2 2 f f 2 5 f 4 
        2 2 f 4 5 2 2 f f f f 4 5 5 f f 
        f f 4 4 5 5 f f 2 f f f 4 4 f f 
        4 f f f 4 f f 4 2 2 2 f 2 f f 2 
        4 4 2 2 f f 4 4 4 4 4 2 f f 4 4 
        `, true)
    scene.setTile(10, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . a f . . . . . . 
        . . . . . . a a a f . . . . . . 
        . . . . . a a a a f . . . . . . 
        . . . . a a a a a f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . 1 2 2 . . . . . . 
        . . . . . . 1 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        `, true)
    scene.setTile(9, img`
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
        `, false)
    scene.setTile(5, img`
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
        `, false)
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(false)
})
let Egg: Sprite = null
let tile_list: tiles.Tile[] = []
let dino: Sprite = null
let animStandLeft: animation.Animation = null
let animStandRight: animation.Animation = null
createDino()
createMap()
createEggs()
info.setScore(0)
