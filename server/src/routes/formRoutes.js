const express = require('express');
const router = express.Router();
const formConfig = require('../data/formConfig.json');

router.get('/form', (req, res) => {
    res.json(formConfig);
});

module.exports = {
    router
};
