import mongoose, { Schema } from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";

const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: [true, 'Name of category is required!'],
        trim: true,
    },
});

CategorySchema.plugin(uniqueValidator, {
    message: '{VALUE} already taken!',
});
CategorySchema.methods = {
    toJSON() {
        return {
            name: this.name,
        };
    },
};

export default mongoose.model('Category', CategorySchema);