import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserTypes = {
  userType: {
    type: String,
    required: true
  }
};

const User = mongoose.model('User',  new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registration_date: {
        type: Date,
        default: Date.now
    },
    devices: [{
        type: Schema.Types.ObjectId,
        ref: "Device"
    }],
}));

export default User;
