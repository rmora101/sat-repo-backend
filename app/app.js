const express = require("express");
const app = express();

app.use(express.static('js'));

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
app.get('/', (req, res) => {
  res.send('hello')
    })

