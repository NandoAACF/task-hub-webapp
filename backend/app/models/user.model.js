module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            username: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
        },
        { timestamps: true }
    );

    // Convert _id to id
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    // Menentukan nama collectionnya, yaitu user
    const User = mongoose.model("user", schema);
    return User;
};
