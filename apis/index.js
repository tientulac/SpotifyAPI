const app = require('../app');
const user = require('../routes/user');
const role = require('../routes/role');
const email = require('../routes/email');

app.use('/api/account', user);
app.use('/api/email', email);
app.use('/api/role', role);