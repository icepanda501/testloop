var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/test";

MongoClient.connect(url, function (err, db){
  if(err) {
    console.log("Unabke to connect to the mongoDB server. Error", err);
  }else {
    console.log("connection established to", url);
    var collection = db.collection('firstcollection');

    // var user1 = {name: "modulus admin",age:42, roles:['admin','user']};
    // var user2 = {name: "modulus user",age:45, roles:['user']};
    //
    // collection.insert([user1,user2],function (err, result){
    //   if(err){
    //     console.log(err);
    //   } else{
    //     console.log("inserted %d documents into the 'users' ",result.length, result)
    //   }
    // });

    var cursor = collection.find({roles : "user"});
    cursor.sort({age: -1});
    cursor.limit(10);

    cursor.each(function (err,doc){
      if(err){
        console.log(err);
      }else{
        console.log('Fectched', doc);
      }

    })


    db.close();
  }
});
