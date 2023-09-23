module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            desc: {
                type: String,
            },
            category: {
                type: String,
                default: "General",
            },
            deadline: {
                type: Date,
                required: true,
            },
            priority: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                default: "To Do",
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

    // Menentukan nama collectionnya, yaitu todos
    const Todo = mongoose.model("todos", schema);
    return Todo;
};
