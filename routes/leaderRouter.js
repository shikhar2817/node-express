const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next(); 
})
.get( (req, res, next) => {
    res.end('Will Send you all the leaders to you!');
})
.post( (req, res, next) => {
    res.end('Will all the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put( (req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation is not supported on /leaders');
})
.delete( (req, res, next) => {
    res.end('Deleting all the leaders!');
});

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next(); 
})
.get( (req, res, next) => {
    res.end('Will Send details of the leaders : ' + req.params.leaderId + ' to you!');
})
.post( (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /leaders/' + req.params.leaderId);
})
.put( (req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + ' with details ' + req.body.description );
})
.delete( (req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;