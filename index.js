const johnnyFive = require('johnny-five');
const express = require('express');
const board = new johnnyFive.Board(4);
board.on('ready', () => {
    const relay2 = new johnnyFive.Relay(2);
    const relay3 = new johnnyFive.Relay(3);
    const relay4 = new johnnyFive.Relay(4);
    const relay5 = new johnnyFive.Relay(5);
    const app = express();
    app.use(express.static('static'));
    app.post('/relay/:id/on', (req, res) => {
        const id = req.params.id;
        const relay = new johnnyFive.Relay(id);
        relay.close();
        res.send('Relay ' + id + ' is on');
    });
    app.post('/relay/:id/off', (req, res) => {
        const id = req.params.id;
        const relay = new johnnyFive.Relay(id);
        relay.open();
        res.send('Relay ' + id + ' is off');
    });

    app.listen(3000, () => {
        console.log('Server started on http://localhost:3000');
    });

});