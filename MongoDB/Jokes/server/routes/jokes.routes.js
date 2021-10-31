const JokeController = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:_id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/:_id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteAnExistingJoke);
};
