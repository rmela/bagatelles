const assert = require('assert')
const Game = require('./index').Game

const VERTICAL = [
  // Blink pattern
  [ 1, 0 ],
  [ 1, 1 ],
  [ 1, 2 ]
]

const HORIZONTAL = [
  [ 0, 1 ],
  [ 1, 1 ],
  [ 2, 1 ],
]


function match( game, expected ) {
   for( let ridx = 0; ridx < game.rows; ++ridx ) {
     for( let cidx = 0; cidx < game.cols; ++cidx ) {
       if( orientation[ridx][cidx] != game.get( ridx, cidx ) )
          return false
     }
   }
   return true
}

function newGame() {
  let rv = new Game( 3, 3 )
  for( let [row,col] of VERTICAL ) {
    rv.set( row, col, 1 )
  }
  return rv
}

it("should run blink", function() {
    let game = newGame()
    assert.equal( true, match( VERTICAL ) )
    game.advance()
    assert.equal( true, match( HORIZONTAL ) )
    game.advance()
    assert.equal( true, match( VERTICAL ) )
})



