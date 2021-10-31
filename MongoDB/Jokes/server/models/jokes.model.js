const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, 'Setup is required'],
        },
        punchline: {
            type: String,
            required: [true, 'Punchline is required'],
        },
    },
    { timestamps: true }
);

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;
