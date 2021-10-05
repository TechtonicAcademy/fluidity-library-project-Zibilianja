const router = require('express').Router();
const path = require('path');

// router.use('/api', apiRoutes);

router.route('/').get((req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = router;