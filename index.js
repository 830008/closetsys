const johnnyFive = require('johnny-five');
const board = new johnnyFive.Board(4);
board.on('ready', () => {
    const relay1 = new johnnyFive.Relay(1);
    const relay2 = new johnnyFive.Relay(2);
    const relay3 = new johnnyFive.Relay(3);
    const relay4 = new johnnyFive.Relay(4);
    relay1.open();
    relay2.open();
    relay3.open();
    relay4.open();
});
