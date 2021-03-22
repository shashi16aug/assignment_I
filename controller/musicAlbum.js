const bcrypt = require("bcrypt");
const config = require("../config/config.json")
const userHealper = require('../utils/userHealpers');
const musicAlbum = require('../models/musicAlbum');
const musician = require('../models/musicians')


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * method to create music album 

 */
exports.createMusicAlbum = async(req, res) => {
    try {

        let createNewMusicAlbum = new musicAlbum({
            albumname: req.body.albumname,
            description: req.body.description,
            price: req.body.price,
            release_date: req.body.release_date,
            type_of_music: req.body.type_of_music,
            name: req.body.name,
            musician_type: req.body.musician_type,

        })
        await createNewMusicAlbum.save()
        return res.status(201).json({
            "status_code": 201,
            "success": true,
            'message': "music album successfully created",
            'data': {}

        });

    } catch (err) {
        return res.status(500).json({
            "status_code": 500,
            "success": false,
            'message': err.message,
            'data': {}

        });
    }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * this method is used for creating musicians
 */
exports.createMusicians = async(req, res) => {
    try {

        let createNewMusician = new musician({
            name: req.body.name,
            musician_type: req.body.musician_type,


        })
        await createNewMusician.save()
        return res.status(201).json({
            "status_code": 201,
            "success": true,
            'message': "musician  successfully created",
            'data': {}

        });

    } catch (err) {
        return res.status(500).json({
            "status_code": 500,
            "success": false,
            'message': err.message,
            'data': {}

        });
    }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * this method is used for listing of musicalbum list 
 */


exports.musicalbumList = async(req, res) => {
    try {
        function sortFunction(a, b) {
            var dateA = new Date(a.createdAt).getTime();


            var dateB = new Date(b.createdAt).getTime();

            return dateA > dateB ? 1 : -1;
        };
        const page = parseInt(req.query.page) || 1;
        const dbLimit = config.db_limit
        const numOfUsers = await musicAlbum.count({});

        const musicalbum = await musicAlbum.find({})
        musicalbum.sort(sortFunction)

        return res.status(200).json({
            "status_code": 200,
            "success": true,
            'message': "data successfully fetched",
            'data': {
                "currentPage": page,
                "pages": Math.ceil(numOfUsers / dbLimit),
                "numOfResults": numOfUsers,
                "musicalbum": musicalbum
            }
        });
    } catch (err) {
        return res.status(500).json({
            "status_code": 500,
            "success": false,
            'message': err.message,
            'data': {}

        });
    }
}




exports.musicList = async(req, res) => {
    try {
        function sortFunction(a, b) {
            var priceA = a.price;
            console.log("dateA", dateA)

            var priceB = b.price;
            console.log("dateB", dateB);

            return priceA > priceB ? 1 : -1;
        };


        const musicalbum = await musicAlbum.find({ name: req.body.name })

        musicalbum.sort(sortFunction)

        return res.status(200).json({
            "status_code": 200,
            "success": true,
            'message': "data successfully fetched",
            'data': {

                "musicalbum": musicalbum
            }
        });
    } catch (err) {
        return res.status(500).json({
            "status_code": 500,
            "success": false,
            'message': err.message,
            'data': {}

        });
    }
}


exports.musicAlbumByName = async(req, res) => {
    try {
        function sortFunction(a, b) {
            var dataA = a.name;


            var dataB = b.name;


            return dataA > dataB ? 1 : -1;
        };


        const musicalbum = await musicAlbum.find({ albumname: req.body.albumname })

        musicalbum.sort(sortFunction)

        return res.status(200).json({
            "status_code": 200,
            "success": true,
            'message': "data successfully fetched",
            'data': {

                "musicalbum": musicalbum
            }
        });
    } catch (err) {
        return res.status(500).json({
            "status_code": 500,
            "success": false,
            'message': err.message,
            'data': {}

        });
    }
}