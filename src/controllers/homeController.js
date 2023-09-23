const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');
// req.params - parameters
// req.query - everything after ?
// req.body - post danni

router.get('/', (req, res) => {
    const {search, from, to} = req.query;

    const cubes = cubeManager.getAll(search, from, to);
    res.render('index', {cubes});
});

router.get('/about', (req,res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;