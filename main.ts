let shake = 0
input.onGesture(Gesture.Shake, function () {
    shake = randint(0, 2)
    if (shake == 0) {
        basic.showLeds(`
            . . . # #
            . . . # #
            # # # # #
            . . . # #
            . . . # #
            `)
    } else if (shake == 1) {
        basic.showLeds(`
            . . . . #
            # # . # .
            # # # . .
            # # . # .
            . . . . #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
	
})
