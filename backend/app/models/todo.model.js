module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            desc: {
                type: String,
                required: true,
            },
            category: {
                type: String,
                required: true,
            },
            deadline: {
                type: Date,
                required: true,
            },
            priority: {
                type: String,
                enum: ["low", "medium", "high"],
                required: true,
            },
            status: {
                type: String,
                enum: ["Hold", "In Progress", "Done"],
                default: "Hold",
                required: true,
            }
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
