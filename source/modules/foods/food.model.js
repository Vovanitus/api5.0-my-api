import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator'

const FoodSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: [true, 'Name of food is required!'],
        trim: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
});

FoodSchema.plugin(uniqueValidator, {
    message: '{VALUE} already taken!',
});
FoodSchema.methods = {
    toJSON() {
        return {
            name: this.name,
            category: this.category,
        };
    },
};
FoodSchema.statics = {
    list({ skip = 0, limit = 5 } = {}) {
        return (
            this.find()
                .sort({ name: 1 })
                .skip(skip)
                .limit(limit)
                .populate('category')
        );
    },
};

export default mongoose.model('Food', FoodSchema);