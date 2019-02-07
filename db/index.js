let sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('items.db')

const descriptions = require('./descriptions.js')
const prices = require('./prices.js')
const photos = require('./photos.js')
const shadowLands = require('./shadowLands.js')

db.serialize(() => {
            //schema
            db.run(`CREATE TABLE items ( 
              description varchar(500) , 
              price int(10), 
              image varchar(1000),
              shadowLands varchar(1000) )`
            )
            // model
            let populate = db.prepare('INSERT INTO items(description, price, image, shadowLands) VALUES(?,?,?,?)')
            for( var i = 0; i < 100; i ++ ) {
              populate.run(descriptions[i], prices[i], photos[i], shadowLands[i])
            }
            populate.finalize()
            // logs db population
            db.each("SELECT * from items", function(err, row) {
              console.log(row)
            })

          })
