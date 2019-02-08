const getPopulate = require('../server/index')
const app = require('../server/index.js')

test('sends get request to db via model', () => {
    expect( app.get( 'populate', (req, res) => {
        models.populate( (err, data) => {
          if(err) res.send( 'failed to get data from db at server', err)
          else res.send(data)
          }) 
        }) ).toBe(
            (err, data) => {
                if(err) res.send( 'failed to get data from db at server', err)
                else res.send(data)
            }
    )
})