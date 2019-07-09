const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const passport = require('passport');
const {userRouter} = require('./routes/user');
const {clothingitemRouter} = require('./routes/clothingitem');
const {washoptionRouter} = require('./routes/washoption');
const {dryoptionRouter} = require('./routes/dryoption');
const {authRouter} = require('./routes/auth');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.json({ message: err.message })
})

app.use('/users', userRouter);
app.use('/items', clothingitemRouter);
app.use('/washoptions', washoptionRouter);
app.use('/dryoptions', dryoptionRouter);
app.use('/auth', authRouter);
app.use(passport.initialize());

const PORT = process.env.PORT || 4567;

app.get('/', (req, res) => res.send("Laundry Cycle server up and running"));

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });  