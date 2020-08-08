const express = require("express");

app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        valor: "Aca estamos"
    })
})

app.listen(8080, () => {
    console.log("Server Running");
})