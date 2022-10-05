let count = 0
input.onButtonPressed(Button.B, function () {
    count = 10
    for (let index = 0; index < 10; index++) {
        basic.showNumber(count)
        basic.pause(500)
        count += -1
    }
})
basic.forever(function () {
	
})
