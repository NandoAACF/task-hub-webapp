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
            topic: {
                type: String,
                required: true,
            },
            favorite: {
                type: Boolean,
                required: true,
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

    // Menentukan nama collectionnya, yaitu notes
    const Note = mongoose.model("notes", schema);
    return Note;
};
