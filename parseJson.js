var fs = require('fs');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/test";

MongoClient.connect(url, function (err, db){
  if(err) {
    console.log("Unabke to connect to the mongoDB server. Error", err);
  }else {
    console.log("connection established to", url);
    var collection = db.collection('user_github');
    var cursor = collection.find({languages : ['PHP']});
    cursor.each(function (err,doc){
		if(doc != null){
		    var user = doc;
		    console.log(user.name);
		    console.log(user.languages);
		}else{
			db.close();
		}
    })
  }
});

