const router = require('express').Router();
// Imports API routes from /api/index.js (index.js not needed since it's all implied)
const apiRoutes = require('./api');

// adds a prefix of `/api` to all of the api routesthat we imported from the `api` location
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1> !404 Error No Such Thing Exists! </h1>');
});
// exports our routes!
module.exports = router;