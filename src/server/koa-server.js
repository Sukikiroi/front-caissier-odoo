const express = require('express');
const app = express();
const port = 3004;
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const Odoo = require('odoo-await');

var odoo = new Odoo({
  baseUrl: 'http://localhost',
  port: 8069, // see comments below regarding port option
  db: 'bourhanbackup',
  //username: 'souilhmoh@gm.com',
  username: 'kaddourabdellaziz@gmail.com',
  //username: 'tecmint',
  password: 'rabeh',
});

const odooapi = async () => {
  await odoo.connect();
  const records = await odoo.searchRead(`caissier.income`);

  return [{ id: '1' }];
};

app.post('/login', async (req, res) => {
  var odoo = new Odoo({
    baseUrl: 'http://localhost',
    port: 8069, // see comments below regarding port option
    db: 'bourhancorporation',
    //username: 'souilhmoh@gm.com',
    username:req.body.username,
    //username: 'tecmint',
    password:req.body.password,
  });
 var status=0
  try {
   await odoo.connect()
    status=200
  }
  catch (exception_var) {
   console.log(exception_var)
   status=400
  }
  res.sendStatus(status);
});










app.get('/income/id', async (req, res) => {
  console.log(req.body);
  var odoo = new Odoo({
    baseUrl: 'http://localhost',
    port: 8069, // see comments below regarding port option
    db: 'bourhanbackup',
    //username: 'souilhmoh@gm.com',
    username: req.body.username,
    //username: 'tecmint',
    password: req.body.password,
  });
  await odoo.connect();
  const records = await odoo.searchRead(`caissier.income`, { id: req.body.id });
  res.send(records);
});

app.get('/income', async (req, res) => {
  var odoo = new Odoo({
    baseUrl: 'http://localhost',
    port: 8069, // see comments below regarding port option
    db: 'bourhanbackup',
    //username: 'souilhmoh@gm.com',
    username: 'kaddourabdellaziz@gmail.com',
    //username: 'tecmint',
    password: 'rabeh',
  });
  await odoo.connect();
  const records = await odoo.searchRead(`caissier.income`);
  const company = await odoo.searchRead('res.company');

  res.end(JSON.stringify(records, null, 2));
});

app.get('/income/today', async (req, res) => {
  var odoo = new Odoo({
    baseUrl: 'http://localhost',
    port: 8069, // see comments below regarding port option
    db: 'bourhanbackup',
    //username: 'souilhmoh@gm.com',
    username: 'kaddourabdellaziz@gmail.com',
    //username: 'tecmint',
    password: 'rabeh',
  });
  await odoo.connect();
  const todayIncome = await odoo.searchRead(`caissier.income`, [
    'date',
    '=',
    '2022-05-11',
  ]);
  let todaBbalance = 3;
  for (let index in todayIncome) {
    todaBbalance = todaBbalance + todayIncome[index].balance;
  }
  let result = {
    todaBbalance: todaBbalance,
    todayincome: todayIncome,
  };
  res.send(JSON.stringify(result, null, 2));
});

app.post('/income/newincome', async (req, res) => {
  console.log('Got body:', req.body);
  console.log('you enter yay');
  var odoo = new Odoo({
    baseUrl: 'http://localhost',
    port: 8069, // see comments below regarding port option
    db: 'bourhanbackup',
    //username: 'souilhmoh@gm.com',
    username: 'kaddourabdellaziz@gmail.com',
    //username: 'tecmint',
    password: 'rabeh',
  });
  const Incomeid = await odoo.create('caissier.income', {
    date: '2022-05-11',
    first_qty: '17',
    seconde_qty: '13',
  });
  console.log(Incomeid);

  res.send(JSON.stringify(req.body, null, 2));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
