module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            url: String,
            name: String,
            gender: String,
            culture: String,
            born: String,
            died: Boolean,
            titles: [{
                type: String
            }],
            aliases: [{
                type: String
            }],
            currentLord: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Character = mongoose.model("character", schema);
    return Character;
};
