const Testimonial = require('../models/testimonials.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Testimonial.find());
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getRandom = async (req, res) => {
    try {
        const count = await Testimonial.countDocuments();
        const rand = Math.floor(Math.random() * count);
        const dep = await Testimonial.findOne().skip(rand);
        if (!dep) res.status(404).json({ message: 'Not found' });
        else res.json(dep);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getItem = async (req, res) => {
    try {
        const dep = await Testimonial.findById(req.params.id);
        if (!dep) res.status(404).json({ message: 'Not found' });
        else res.json(dep);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.postItem = async (req, res) => {
    try {
        const { author, text } = req.body;
        const newTestimonial = new Testimonial({ author: author, text: text });
        await newTestimonial.save();
        res.json({ message: 'OK' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.putItem = async (req, res) => {
    const { author, text } = req.body;

    try {
        const dep = await Testimonial.findById(req.params.id);
        if (dep) {
            await Testimonial.updateOne(
                { _id: req.params.id },
                { $set: { author: author, text: text } }
            );
            const depChenged = await Testimonial.findById(req.params.id);
            res.json(depChenged);
        } else res.status(404).json({ message: 'Not found..' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const dep = await Testimonial.findById(req.params.id);
        if (dep) {
            await Testimonial.remove(dep);
            res.json({ message: 'Usunieto', dep })
        } else res.status(404).json({ message: 'Not found' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};