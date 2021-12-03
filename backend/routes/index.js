var express = require("express");
var router = express.Router();
import express from 'express'
import DataStore from'nedb'


/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("This is my homepage");
});

module.exports = router;
