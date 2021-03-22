const express = require('express');
const router = express.Router();
const musicalbum = require('../controller/musicAlbum');



/**
 *  routes for creating user
 */

router.post('/createalbum', musicalbum.createMusicAlbum);
router.post('/createmusicians/', musicalbum.createMusicians);
router.get('/users/', musicalbum.userList);
router.get('/musiclist', musicalbum.musicList);
router.get('/musiclistbyname', musicalbum.musicAlbumByName);





module.exports = router;