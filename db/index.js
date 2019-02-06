sqlite = requires('sqlite3').verbose()
let db = new sqlite3.Database('items.db')

db.serialize(function() {
            db.run('CREATE TABLE items (id int NOT NULL AUTO INCREMENT' +
            'description varchar(500) NOT NULL' + 
            'price int(10) NOT NULL' + 
            'image varchar(500) NOT NULL)'
           
            let populate = db.prepare('INSERT INTO items(dsecription, price, image) ' +
                                      'VALUES(?,?,?);'
            for( var i = 0; i <= 100; i ++ ){

            }
           
            db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
                console.log(row.id + ': ' + row.info);
            });
          });
           
          db.close();
