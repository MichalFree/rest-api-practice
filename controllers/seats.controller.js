const Seat = require('../models/seats.models');

exports.getAll = async (req, res) => {
    try {
        res.json(await Seat.find());
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getItem = async (req, res) => {
    try {
        const dep = await Seat.findById(req.params.id);
        if (!dep) res.status(404).json({ message: 'Not Found..' });
        else res.json(dep);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.postItem = async (req, res) => {
    try {
        const { day, seat, client, email } = req.body;
        const newSeat = new Seat({
            day: day,
            seat: seat,
            client: client,
            email: email,
        });
        await newSeat.save();
        req.io.emit('seatsUpdated', await Seat.find());
        res.json({ message: 'OK ' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const dep = await Seat.findById(req.params.id);
        if (dep) {
            await Seat.remove(dep);
            res.json({ message: 'Deleted Complete', dep });
        } else res.status(404).json({ message: 'Not found..' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};