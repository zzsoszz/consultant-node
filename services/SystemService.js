'use strict';
var schedule = require('node-schedule');
var knex=require("../db/connect.js");
var create=require("../db/create-database.js");
const R = require('ramda');

exports.init = function() {
    
    create.createDatabase().then(function(result){
        console.log("create database sucessed!");
        var user= knex('cuser').insert({phone: '13730666347',password:"123456"}).returning('*').then(function(data){
            console.log(data);
        });

    });


}

