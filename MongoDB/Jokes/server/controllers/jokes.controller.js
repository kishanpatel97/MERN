const Joke = require('../models/jokes.model');

// get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => res.json({ jokes: allDaJokes }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// get a single joke by id
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then((oneSingleJoke) => res.json({ jokes: oneSingleJoke }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// create a joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then((newlyCreatedJoke) => res.json({ jokes: newlyCreatedJoke }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

// update a joke
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
        .then((updatedJoke) => res.json({ jokes: updatedJoke }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

//delete a joke
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

