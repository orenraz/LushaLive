module.exports = app => {
    app.get("/*", (req, res) => {
        res.json({ message: "Back-end is alive" });
    });
};
