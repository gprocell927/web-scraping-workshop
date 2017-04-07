
### Implemented code
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

### Roadmap of Pseudocode

1. I visit www.papamurphys.com
2. I click on the button .cta
3. I wait until the location form is loaded
4. I enter my zipcode into the input `#storeSearch-query`
5. I click on the button #search-btnPg
2. I click on .select-store-btn
2. If modal, click modal close button
2. I click `('a[href=\'/menu#27\']')`
2. I click `('a[href= \'/configurator/#/cyo?id=27\']')`
2. I click `('.nav nav-right')`
2. I click `('.nav nav-right')`
2. I click `('h4')`
2. I click `('.nav nav-right')`
2. I click `('h4')`
2. I click `('.nav nav-right')`
2. I click `('#cyo-start')`
2. I click `('#cart-btn')`
2. I click `('#checkout')`
2. I click `('.inline button')`

### Link to docs used
[Nightmare JS Docs](https://github.com/segmentio/nightmare)

### Technical problems

We arrived at a point where we could not select the store closest to our location to order for delivery. All of the store links had the same name, and we thought that we could select the first link in the array, but that did not bode well for us.
