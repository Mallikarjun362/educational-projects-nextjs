import mongoose, { Document, Schema } from 'mongoose';
// Validators logic
function validateEmail({ email }: { email: string }) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
// Interface for the schema and the model
interface IUser extends Document {
    userName: string;
    email?: string;
    interests: [string];
    skills: [string];
}

const userSchema: Schema<IUser> = new Schema({
    userName: {
        type: Schema.Types.String,
        unique: true,
        index: true,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 40,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 150,
        minlength: 4,
        validate: { validator: validateEmail, message: "Please enter valid e-mail." },
    },
    interests: {
        type: [Schema.Types.String],

    }

});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
