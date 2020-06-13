let mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);

//globals
const connectionString = 'mongodb://localhost/wrenchDB';

let userSchema = require('./users/user');
let userModel;

module.exports = {
    connect: function () {
        mongoose.connect(connectionString, function (e) {
            if (!e) {
                console.log('Connected to MongoDB');
                let connection = mongoose.connection;
                userModel = connection.model('User', userSchema);
            }
            else console.log('Error connecting to MongoDB');
        });
    },
    registerUser: function (user, callback) {
        let newUser = new userModel({
            username: user.username,
            password: user.password,
            email: user.email,
            description: user.description,
            displayPicture: user.displayPicture,
        })
        newUser.save(callback);
    }
}
