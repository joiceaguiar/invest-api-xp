const router = require('express').Router();

const investmentsRouter = require('./investments/index');
const assetsRouter = require('./assets/index');
const accountRouter = require('./account/index');

router.use('/investimentos', investmentsRouter);
router.use('/ativos', assetsRouter);
router.use('/conta', accountRouter);

module.exports = router;
