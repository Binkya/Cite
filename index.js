let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let cors = require('cors');
const PORT = process.env.PORT || 8080

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public');

// ROUTES: ------------------------
app.get('/', (req, res) => {
    res.render('./index.html')
});

app.get('/login', (req, res) => {
    res.render('./pages/login.html')
});

app.get('/register', (req, res) => {
    res.render('./pages/register.html')
});

app.get('/search/profile', (req, res) => {
    res.render('./pages/searchProfile.html')
});

app.get('/search', (req, res) => {

    res.render('./pages/searchLogin.html')

});

app.get('/profile', (req, res) => {
    res.render('./pages/profile.html')
});

app.get('/settings', (req, res) => {
    res.render('./pages/settings.html')
});

app.get('/discounts', (req, res) => {
    res.render('./pages/discounts.html')
});

app.get('/balance', (req, res) => {
    res.render('./pages/balance.html')
});