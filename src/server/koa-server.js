const express = require('express')
const app = express()
const port = 3004
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())




const Odoo = require('odoo-await')

var odoo = new Odoo({
  baseUrl: 'http://localhost',
  port: 8069, // see comments below regarding port option
  db: 'bourhanbackup',
  //username: 'souilhmoh@gm.com',
  username: 'kaddourabdellaziz@gmail.com',
  //username: 'tecmint',
  password: 'rabeh'
});


const odooapi = async () => {
  await odoo.connect();
  const records =  await odoo.searchRead(`caissier.income`);
  
return [{id:"1"}]
}

app.post('/login', (req, res) => {

  res.send(req.body)
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/income', async(req, res) => {
  await odoo.connect();
  const records =  await odoo.searchRead(`caissier.income`);
  const company =  await odoo.searchRead('res.company');
  
  res.end(JSON.stringify(records, null, 2))
})

app.get('/income/today', async(req, res) => {
  await odoo.connect();
  const todayIncome =  await odoo.searchRead(`caissier.income`, ['date', '=', '2022-05-11']);
  let todaBbalance=3
  for(let index in todayIncome){
    todaBbalance=todaBbalance+ todayIncome[index].balance
  }
let result={
  todaBbalance:todaBbalance,
  todayincome:todayIncome,
}
  res.send(JSON.stringify(result, null, 2))
})



app.post('/income/newincome',async(req,res)=>{
  console.log('Got body:', req.body);
  console.log('you enter yay')

  const partnerId = await odoo.create('caissier.income', {date:'2022-05-11',first_qty: '17',seconde_qty:'13'});
  console.log(partnerId)
  res.send(JSON.stringify(req.body, null, 2))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
