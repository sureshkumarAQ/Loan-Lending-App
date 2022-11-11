const express = require("express");
const route = express.Router();
const auth = require('../middleware/auth.js')

const chatController = require('../controller/chatController')


route.post('/:userID',auth,chatController.accessChat);
route.get('/fetchAllChats',auth,chatController.fetchAllChats);

// Message routes
route.post('/message/send',auth,chatController.sendMessage);
route.get('/:chatId',auth,chatController.allMessage);

module.exports = route;