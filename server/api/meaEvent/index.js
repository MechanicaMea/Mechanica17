'use strict';

import * as auth from '../../auth/auth.service';

var express = require('express');
var controller = require('./meaEvent.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.put('/register/:eventId', auth.isAuthenticated(), controller.register);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
