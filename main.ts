let X = 2
let Y = 2
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        if (Y < 4) {
            led.unplot(X, Y)
            Y += 1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
    if (input.isGesture(Gesture.LogoDown)) {
        if (Y > 0) {
            led.unplot(X, Y)
            Y += -1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        if (X > 0) {
            led.unplot(X, Y)
            X += -1
            led.plot(X, Y)
        }
    }
    if (input.isGesture(Gesture.TiltRight)) {
        if (X < 4) {
            led.unplot(X, Y)
            X += 1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
})
