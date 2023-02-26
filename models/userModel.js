import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true 
    },
    role : {
        type: String,
        default : 'user' 
    },
    root : {
        type: Boolean,
        default : false
    },
    avatar : {
        type: String,
        default : "https://res.cloudinary.com/amdaniroptani/image/upload/v1660627936/samples/people/boy-snow-hoodie.jpg"
    }, 
},{
    timestamps: true
}
)

let Dataset = mongoose.model.user || mongoose.model('user', userSchema)
export default Dataset