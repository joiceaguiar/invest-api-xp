const express = require('express');

const assetController = require('../../controllers/assetController');

const assetsRouter = express.Router();

assetsRouter.get('/cliente/:id', assetController.getByClientId);
assetsRouter.get('/:id', assetController.getByAssetId);

module.exports = assetsRouter;
