const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const SocialMedia = {
    FACEBOOK: 'Facebook',
    GOOGLE: 'Google',
    LINKEDIN: 'LinkedIn',
};

const schema = mongoose.Schema({
    _user: {
        type: String,
        required: true,
    },
    _password: {
        type: String,
        required: true,
    },
    _socialMedia: [
        {
            type: String,
            enum: Object.values(SocialMedia),
        },
    ],
});

class User {
    constructor(user, password, socialMedia) {
        this._user = user;
        this._password = password;
        this._socialMedia = socialMedia;
    }

    get user() {
        return this._user;
    }
    set user(user) {
        this._user = user;
    }

    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }

    get socialMedia() {
        return this._socialMedia;
    }
    set socialMedia(socialMedia) {
        this._socialMedia = socialMedia;
    }
}

schema.loadClass(User);
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', schema);
