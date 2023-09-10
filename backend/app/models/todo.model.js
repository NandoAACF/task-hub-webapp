module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            desc: String,
            category: String,
            deadline: Date,
        },
        { timestamps: true }
    );

    // Convert _id to id
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    // Menentukan nama collectionnya, yaitu todos
    const Todo = mongoose.model("todos", schema);
    return Todo;
};
