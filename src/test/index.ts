import * as assert from 'assert'

describe( 'common', () => {
  it( 'it imports without any assertion being raised', () => {
    assert.doesNotThrow( () => {
      require( '..' )
    })
  })
})
