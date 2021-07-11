enum ActionKind {
    Walking,
    Idle,
    Jumping,
    standingRight,
    standingLeft,
    walkingLeft,
    walkingRight
}
function setupLevel () {
    clearLevel()
    game.splash("Level " + Level)
    createMap()
    createEggs()
    scene.placeOnRandomTile(dino, 9)
}
function createStandAnimation () {
    animStandRight = animation.createAnimation(ActionKind.standingRight, 200)
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
    animStandLeft = animation.createAnimation(ActionKind.standingLeft, 200)
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
    scene.setBackgroundColor(9)
    if (Level == 1) {
        scene.setTileMap(img`
            99..............................
            ................55...........5..
            ..............2255..........e7..
            ............ee7777......77...e..
            ....5.....77......5.7........ee.
            ..5.......55........e...5..72a..
            .................7..e7.....2ee..
            ...7.777.....5..7e..ee....77ee7.
            772e2eee2777....ee22ee...7eeeee.
            eeeeeeeeeeee22eeeeeeee222eeeeee2
            `, TileScale.Sixteen)
    } else if (Level == 2) {
        scene.setTileMap(img`
            99..............................
            .......................e....5...
            ......................e.........
            eee.............5.....e..5..ee..
            .....................e.....2....
            ........5...........e.5..72.....
            ..................e2....2.......
            ......5.727......7.7..77.......7
            ......e.eee...5........5....a.2.
            22222ee2eee222ee22227e77222272..
            `, TileScale.Sixteen)
    } else {
        scene.setTileMap(img`
            5.........
            7.........
            ..........
            ..7..eee..
            ...22.....
            ee.ee222.5
            ...ea7.7e5
            ..7e.....5
            ...e....5.
            e...77..7.
            e........2
            ee.......e
            .e2ee....e
            .5...e...e
            ........5e
            ..eee...ee
            7.........
            ......7...
            .........5
            5eeee....7
            ee...e....
            e.........
            .......e7.
            ..........
            .5ee7.....
            2e.....722
            e.........
            ..eee.22..
            .....e..22
            .e...5....
            ..........
            .ee2e..5..
            ...e...7..
            .........5
            .........7
            ......5...
            .....ee...
            ..........
            ...e......
            ..22222222
            .eeeeeeeee
            ........ee
            ee.......e
            ..e.7...5e
            ........ee
            .......ee.
            99.eee2e..
            777...e...
            `, TileScale.Sixteen)
    }
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dino.isHittingTile(CollisionDirection.Bottom)) {
        dino.vy = -140
    }
    jumpNumber += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(dino, ActionKind.walkingLeft)
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    if (Level == 3) {
        evaluateJumps()
    } else {
        Level += 1
        setupLevel()
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(dino, ActionKind.standingRight)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(dino, ActionKind.standingLeft)
})
function createWalkingAnimation () {
    animWalkLeft = animation.createAnimation(ActionKind.walkingLeft, 100)
    animWalkLeft.addAnimationFrame(img`
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
    animWalkLeft.addAnimationFrame(img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c c b 5 5 b d d d c . 
        . . . . . c d 5 5 b b c c c . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `)
    animWalkLeft.addAnimationFrame(img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c b 5 5 b d d d c c . 
        . . . . c d 5 5 b b c c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `)
    animWalkLeft.addAnimationFrame(img`
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
    animWalkRight = animation.createAnimation(ActionKind.walkingRight, 100)
    animWalkRight.addAnimationFrame(img`
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
        . c c d d d d b 5 5 c b b c . . 
        c d c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c c c c . . 
        . . . . c b 5 5 d c b b b c . . 
        `)
    animWalkRight.addAnimationFrame(img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 f 1 5 5 5 5 c . 
        . . . . c 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c d d d b 5 5 b c c c . . . . 
        . . c c c b b 5 5 d c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . . . c b b b c . . . . 
        `)
    animWalkRight.addAnimationFrame(img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 f 1 5 5 5 5 c . 
        . . . . c 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c c d d d b 5 5 b c c . . . . 
        . . . c c c b b 5 5 d c . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . . . c b b b c . . . . 
        `)
    animWalkRight.addAnimationFrame(img`
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
    animation.attachAnimation(dino, animWalkLeft)
    animation.attachAnimation(dino, animWalkRight)
}
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
    animation.setAction(dino, ActionKind.walkingRight)
})
function evaluateJumps () {
    if (jumpNumber < 75) {
        game.splash("Excellent!")
        pause(200)
        game.splash("You only jumped " + jumpNumber + " times!", "")
        pause(600)
        game.over(true, effects.starField)
    } else {
        game.splash("meh...")
        pause(200)
        game.splash("You jumped " + jumpNumber + " times", "")
        pause(600)
        game.over(true, effects.dissolve)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.jumpUp.play()
})
function clearLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
}
function createDino () {
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
    scene.cameraFollowSprite(dino)
    createStandAnimation()
    createWalkingAnimation()
    animation.setAction(dino, ActionKind.standingRight)
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    info.changeLifeBy(-1)
    scene.placeOnRandomTile(dino, 9)
    music.powerDown.play()
})
let Egg: Sprite = null
let tile_list: tiles.Tile[] = []
let animWalkRight: animation.Animation = null
let animWalkLeft: animation.Animation = null
let jumpNumber = 0
let animStandLeft: animation.Animation = null
let animStandRight: animation.Animation = null
let dino: Sprite = null
let Level = 0
Level = 1
createDino()
setupLevel()
info.setScore(0)
info.setLife(10)
