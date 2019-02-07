
let sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('items.db')

const descriptions = require('./descriptions.js')
const prices = require('./prices.js')
const images = require('./photos.js')

db.serialize(() => {
            db.run(`CREATE TABLE items ( 
              id int AUTO INCREMENT PRIMARY KEY,
              description varchar(500) , 
              price int(10), 
              image varchar(500) )`
            )
            let populate = db.prepare('INSERT INTO items(description, price, image) VALUES(?,?,?)')
            for( var i = 0; i <= 100; i ++ ) {
              populate.run(descriptions[i], prices[i], images[i])
            }
            populate.finalize()
            db.each("SELECT rowid AS id, price FROM items", function(err, row) {
              console.log(row.id + ": " + row.info);
          })
          });

db.close()