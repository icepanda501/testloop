var User = require('./model/user');
// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password' 
});

for(var i = 0;i<=7;i++){
	var obj = JSON.parse(fs.readFileSync('users_repo_'+i+'.json', 'utf8'));
	
}

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});