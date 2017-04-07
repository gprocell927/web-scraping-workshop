const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
let buttons

nightmare
  .goto('http://www.papamurphys.com')
  .click('.cta')
  .type('#storeSearch-query', '80202')
  .click('#search-btnPg')
  .click('button.select-store-btn[0]')
  .end()
  .then(res => console.log(res))
  .catch(err => console.log('Search failed:',err))
