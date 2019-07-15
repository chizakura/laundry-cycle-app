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
const {protectedRouter} = require('./routes/protected');
const {authorized} = require('./auth/handleAuth');
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

// Static hosting for built files
app.use(express.static(path.join(__dirname, './client/build')));

app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.json({ message: err.message })
})

app.use('/users', userRouter);
app.use('/items', clothingitemRouter);
app.use('/washoptions', washoptionRouter);
app.use('/dryoptions', dryoptionRouter);
app.use('/auth', authRouter);
app.use('/app', authorized, protectedRouter);
app.use(passport.initialize());

const PORT = process.env.PORT || 4567;

app.get('/', (req, res) => res.send("Laundry Cycle server up and running"));

// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
  app.use('*', (req, res) => res.sendFile(path.join(__dirname, './client/build', "index.html")));
}

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });  