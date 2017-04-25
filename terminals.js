'use strict'

/* global txt */

// create a dictionary (nested obj) of words cataloged by syllable and part of speech:
const terminals = {}
txt.forEach( word => {
  const numSyll = RiTa.getSyllables(word).split('/').length;
  const posFull = RiTa.getPosTags(word);
  let pos;

  // if there is no pos identified OR the first letter doesn't match one of the pos categories,
  // return out of the iteration:
  if (!posFull[0] || posFull[0][0].match(/[^vwjncdpri]/)) {
    return
  }
  // else set the value of pos var:
  switch (word) {
    case 'a':
    pos = 'det-s';
    break;
    case 'each':
    pos = 'det-s';
    break;
    case 'this':
    pos = 'det-s';
    break;
    case 'all':
    pos = 'det-p';
    break;
    case 'those':
    pos = 'det-p';
    break;
    case 'these':
    pos = 'det-p';
    break;
    case 'some':
    pos = 'det-p';
    break;
    case 'the':
    pos = 'det';
    break;
    case 'no':
    pos = 'det';
    break;
  }

  switch(posFull[0]) {
    case 'nns':
      pos = 'noun-p';
      break;
    case 'nn':
      pos = 'noun-s';
      break;
    case 'nnp':
      pos = 'noun-s';
      break;
    case 'nnps':
      pos = 'noun-s';
      break;
    case 'cd':
      pos = 'number';
      break;
    case 'cc':
      pos = 'conj'
  }

  switch (posFull[0][0]) {
    case 'v':
      pos = 'verb';
      break;
    case 'i':
      pos = 'prep';
      break;
    case 'w':
      pos = 'quest';
      break;
    case 'j':
      pos = 'adj';
      break;
    case 'p':
      pos = 'pron';
      break;
    case 'r':
      pos = 'adv';
      break;
  }

  // and add values to the dictionary
  if (terminals[numSyll]) {
    if (terminals[numSyll][pos]) {
      if (terminals[numSyll][pos].indexOf(word) === -1) {
        terminals[numSyll][pos].push(word);
      }
      else {
        return
      }
    }
    else {
      terminals[numSyll][pos] = [word]
    }
  }
  else {
    terminals[numSyll] = {};
    terminals[numSyll][pos] = [word]
  }
})
console.log('terminals', terminals)
