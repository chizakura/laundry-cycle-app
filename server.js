const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.json({ message: err.message })
})

const PORT = process.env.PORT || 4567;

app.get('/', (req, res) => res.send("Laundry Cycle server up and running"));

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });  