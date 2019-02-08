const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('../db/items.db')

module.exports = {
  populate : (callback) => { 
      db.all('SELECT * from items', (err, data) =>{
        if(err) callback(err)
        else callback(null, data)
      })
    }
}