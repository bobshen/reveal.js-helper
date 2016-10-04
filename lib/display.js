/**
 * Display
 *
 * @file Display file script
 * @author shenbin
 */

var COMMAND = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
};
var socket = io('http://' + location.hostname + ':3030');

socket.on('connected', function () {
    socket.on('change', function (data) {
        switch (data.action) {
            case COMMAND.UP:
                Reveal.navigateUp();
                break;
            case COMMAND.DOWN:
                Reveal.navigateDown();
                break;
            case COMMAND.LEFT:
                Reveal.navigateLeft();
                break;
            case COMMAND.RIGHT:
                Reveal.navigateRight();
                break;
        }
    });
});
