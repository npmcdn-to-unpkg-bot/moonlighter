'use strict';

let db = require('../db');
let Character = module.exports;
let Promise = require('bluebird');
// generate experience points from GH contributions
Character.getExpFromContribs = function(contribs){
  return contribs * 17;
};
// generate experience points from CW kata
Character.getExpFromHonor = function(honor){
  return honor * 23;
};

// generate character's level
Character.getLevelFromExp = function(exp){
  let remainder = exp;
  let level = 0;
  let interval = 0;
  while (remainder >= 0){
    interval += 300;
    level++;
    remainder -= interval;
  }
  remainder += interval;
  return { 'level':level, 'exp': remainder };
};

Character.getByLevel = function(level){
  return db('characters')
  .where({'level': level})
}

Character.getAll = function(){
  return db('characters')
};
