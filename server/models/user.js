//require modules for the User Model

let mongoose = require('mongoose');
let passportlocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },

        
        password:
        {
            type: String,
            default:'',
            trim: true,
            required: 'password is required'

        },
        
       email:
       {
           type:String,
           default: '',
           trim:true,
           required: 'Display Name is required'
       },

       displayName:
       {
           type:String,
           default: '',
           trim:true,
           required: 'email addresss is required'
       },

       created:
       {
           type: Date,
           default: Date.now
       },
       
       update:
       {
           type: Date,
           default: Date.now
       },



    

    },
    {
        collection: "user"
    }
);

// configure options for User Model

let options = ({missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportlocalMongoose, options);

module.exports.User = mongoose.model('User', User);