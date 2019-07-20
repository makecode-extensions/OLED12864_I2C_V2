let X = 0
basic.forever(function () {
    OLED12864_I2C.printNumber(X, 1, false)
    OLED12864_I2C.printString(", ", 1, false)
    basic.pause(500)
})