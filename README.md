# I2C OLED 128x64 PXT extension

makecode I2C OLED 128x64 extension V2 for micro:bit. with 6x8 font, and increased display speed.  

Part of the drive base on fizban99's microbit OLED driver:  
https://github.com/fizban99/microbit_ssd1306  

Author: shaoziyang  
Date:   2019.Jul  

![](icon.png)  

## Demo

```
let num = 0
basic.forever(function () {
    OD01.Number(num, 0, 0, 0)
    num += 1
    OD01.printNumber(num, 1, false)
    OD01.printString("-", 1, false)
    basic.pause(100)
})
```

![](test.jpg)

## License

MIT

Copyright (c) 2019, microbit/micropython Chinese community    

## Supported targets

* for PXT/microbit

