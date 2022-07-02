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
  var status = 0;
  try {
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
    var user = await odoo.searchRead(`res.users`, { email: req.body.username });
    var company = await odoo.searchRead(`res.company`,2);

    res.send(user);
    console.log(company[0].max_balance);
    status = 200;
  } catch (exception_var) {
    console.log(company);
    status = 400;
    res.send(status);
  }
});

app.post('/income/id', async (req, res) => {
  console.log(req.body);
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

  try {
    const records = await odoo.searchRead(`caissier.income`, {
      id: req.body.id,
    });
    res.send(JSON.stringify(records, null, 2));
  } catch (exception_var) {
    console.log(exception_var);
    res.send(400);
  }
});

app.post('/income', async (req, res) => {
  var odoo = new Odoo({
    baseUrl: 'http://localhost',
    port: 8069, // see comments below regarding port option
    db: 'bourhanbackup',
    //username: 'souilhmoh@gm.com',
    username: req.body.username,
    //username: 'tecmint',
    password: req.body.password,
  });
  console.log(req.body.username)
  await odoo.connect();
  const records = await odoo.searchRead(`caissier.income`);

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
  await odoo.connect();
  const date = new Date();

  const todayDate =
    date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

  console.log(todayDate);
  try {
    const Incomeid = await odoo.create('caissier.income', {
      first_qty: req.body.paperone,
      seconde_qty: req.body.papertwo,
      tree_qty: req.body.papertree,
      four_qty: req.body.paperfour,
      coin_one: req.body.coinone,
      coin_two: req.body.coinone,
      coin_tree: req.body.coinone,
      coin_four: req.body.coinone,
      coin_five: req.body.coinone,
      coin_six: req.body.coinone,
      date: todayDate,
      operation_code: 2,
      client_code: 3,
    });
    console.log(Incomeid);

    res.send(JSON.stringify(req.body, null, 2));
  } catch (exception_var) {
    console.log(exception_var);
    res.send(400);
  }
});




app.post('/income/delete', async (req, res) => {
  console.log(req.body);
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

  try {
    const deleted = await odoo.delete('caissier.income', req.body.id);
    res.send(JSON.stringify(deleted, null, 2));
  } catch (exception_var) {
    console.log(exception_var);
    res.send(400);
  }
});





app.post('/income/update', async (req, res) => {
  console.log(req.body);
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

  try {
    const updated = await odoo.update('caissier.income', req.body.id, {
      street: '334 Living Astro Blvd.',
    });
    res.send(JSON.stringify(updated, null, 2));
  } catch (exception_var) {
    console.log(exception_var);
    res.send(400);
  }
});


















app.get('/spending', async (req, res) => {
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
  const records = await odoo.searchRead(`caissier.spending`);

  res.end(JSON.stringify(records, null, 2));
});

app.post('/spending/new', async (req, res) => {
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

  console.log(req.body);
  const new_spending = await odoo.create(`caissier.spending`, {
    entrance: req.body.entrance,
    door: req.body.door,
    section: req.body.section,
    description: req.body.description,
    sold: req.body.sold,
    concerned: req.body.concerned,
    taxpayer: req.body.taxpayer,
  });

  res.end(JSON.stringify(new_spending, null, 2));
});

app.post('/spending/id', async (req, res) => {
  console.log(req.body);
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

  try {
    const records = await odoo.searchRead(`caissier.spending`, {
      id: req.body.id,
    });
    res.send(JSON.stringify(records, null, 2));
  } catch (exception_var) {
    console.log(exception_var);
    res.send(400);
  }
});





app.post('/spending/delete', async (req, res) => {
  console.log(req.body);
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

  try {
    const deleted = await odoo.delete('caissier.spending', req.body.id);
    res.send(JSON.stringify(deleted, null, 2));
  } catch (exception_var) {
    console.log(exception_var);
    res.send(400);
  }
});





app.post('/spending/update', async (req, res) => {
  console.log(req.body);
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

  try {
    const updated = await odoo.update('caissier.spending', req.body.id, {
      door:  req.body.door,concerned:req.body.concerned,taxpayer:req.body.concerned,sold:req.body.sold,entrance:req.body.entrance,section:req.body.section
    });

    res.send(JSON.stringify(updated, null, 2));
    console.log( req.body)
  } catch (exception_var) {
    console.log(exception_var);
    res.send(400);
  }
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
