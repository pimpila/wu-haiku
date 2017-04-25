/* global terminals */

// call new instance of RiGrammar();
const rg = new RiGrammar();

// production rules:

// start/s:
rg.addRule('<start>', '<5-PP> \n <7-NP> \n <5-VP> | <5-NP> \n <7-VP> \n <5-PP>')

rg.addRule('<5-PP>', '<1-prep> <1-det-s> <2-adj> <1-noun-s> | <1-prep> <1-det-p> <2-adj> <1-noun-p> | <1-prep> <1-det> <2-adj> <1-noun-s> | <1-prep> <1-det> <2-adj> <1-noun-p>| <2-prep> <1-det-s> <2-noun-s> | <2-prep> <1-det-p> <2-noun-p> | <2-prep> <1-adj> <2-noun-s> | <2-prep> <1-adj> <2-noun-p> | <2-prep> <3-noun-p> | <2-prep> <3-noun-s>')
rg.addRule('<5-VP>', '<3-verb> <2-adv> | <2-verb> <3-adv>')
rg.addRule('<5-NP>', '<1-det-s> <1-adj> <3-noun-s> | <3-adj> <2-noun-p> | <3-adj> <2-noun-s> | <1-det-p> <1-adj> <3-noun-p> | <1-det> <1-adj> <3-noun-p> | <1-det> <1-adj> <3-noun-p> ')

rg.addRule('<7-NP>', '<1-det-s> <1-adj> <5-noun-s> | <1-det-p> <1-adj> <5-noun-s> | <1-det> <1-adj> <5-noun-s> | <1-quest> <2-adj> <4-noun-p> | <1-quest> <2-adj> <4-noun-s>')
rg.addRule('<7-VP>', '<3-verb> <4-adv> | <4-verb> <3-adv>')

// for each terminal:

// collect types of syllable / pos combinations:
const types = []

for (var key in terminals) {
  for (var key2 in terminals[key]) {
    types.push(`${key}-${key2}`)
  }
}

// then add a rule for each terminal
types.forEach(type => {
  const num = type[0];
  const pos = type.slice(2, type.length)
  // console.log('rule: ', `<${type}>`, terminals[num][pos].join(' | '))
  rg.addRule(`<${type}>`,  terminals[num][pos].join(' | '))
})

// expand grammar:
const result = rg.expand();






