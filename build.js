const fs = require('fs')
const uniq = require('lodash').uniq
const compact = require('lodash').compact


//generate man
var man = fs.readFileSync('./man.txt', 'utf8')
  .split('\n')
  .map(function(line){
    return line.trim()
  })

man = uniq(compact(man)).sort()

fs.writeFileSync('./man.json', JSON.stringify(man, null, 2))


//generate woman
var woman = fs.readFileSync('./woman.txt', 'utf8')
  .split('\n')
  .map(function(line){
    return line.trim()
  })

woman = uniq(compact(woman)).sort()

fs.writeFileSync('./woman.json', JSON.stringify(woman, null, 2))


var all = man.concat(woman).sort()


//merge
fs.writeFileSync('./index.json', JSON.stringify(all, null, 2))
