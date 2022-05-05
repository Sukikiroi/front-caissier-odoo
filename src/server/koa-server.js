const express = require('express')
const app = express()
const port = 3004
var cors = require('cors')

app.use(cors())
const Odoo = require('odoo-await')


const odoo = new Odoo({
    baseUrl: 'http://localhost',
    port: 8069, // see comments below regarding port option
    db: 'bourhancorporation',
    username: 'kaddourabdellaziz@gmail.com',
    password: 'rabeh'
});
const odooapi = async () => {
  await odoo.connect();
  const records =  await odoo.searchRead(`caissier.income`);
  
return [{id:"1"}]
}





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/income', async(req, res) => {
  await odoo.connect();
  const records =  await odoo.searchRead(`caissier.income`);
  
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
  res.end(JSON.stringify(result, null, 2))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
