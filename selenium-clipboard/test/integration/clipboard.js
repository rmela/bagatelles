const assert = require( 'chai' ).assert
const { Builder, By } = require( 'selenium-webdriver' )
//const { Options } = require('selenium-webdriver/chrome')
const CAPABILITIES = {
    browserName: 'chrome'
}

async function getClipboardText( driver ) {
    return driver.executeAsyncScript( cb => {
        cb( navigator.clipboard.readText() )
    })
}

describe( "level1", async function() {

    let builder = new Builder()
      .withCapabilities( CAPABILITIES )
    let driver

      beforeEach( async () => {
        driver = await builder.build()
       })

      it( "should copy to clipboard", async function()  {
        this.timeout( 10000 )
          await driver.get('https:/github.com/rmela/bagatelles');
          let dropdownButton = await driver.findElement( By.xpath( '//get-repo/details' ) )
          await dropdownButton.click()
          let copyButton = await driver.findElement( By.xpath( '//get-repo//clipboard-copy'))
          await copyButton.click()
          let text =  await getClipboardText( driver )
          assert.equal( 'https://github.com/rmela/bagatelles.git',  text )
        })

        afterEach(  async function() {
            await driver.quit()
      })
})
