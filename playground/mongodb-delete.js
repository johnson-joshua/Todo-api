// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructure mongodb to get client and objectID

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: "Buy Groceries"}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne (deletes first document that satisfies query and stops)
  // db.collection('Todos').deleteOne({text: "Buy Groceries"}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete (delete item and returns the item)
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //delete Many with Joshua Johnson
  db.collection('Users').deleteMany({name: "Joshua Johnson"}).then((result) => {
    console.log(result);
  });

  //findOneAndDelete with objectID
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5b2d2eb52749bc20282765c8")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  }); 
  // db.close();
});
