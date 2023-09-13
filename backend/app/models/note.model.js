module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            desc: String,
            topic: String,
            favorite: Boolean,
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
