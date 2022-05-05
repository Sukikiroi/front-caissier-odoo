
import {Odoo} from  'odoo-await'
const odoo = new Odoo({
    baseUrl: 'http://localhost',
    port: 8069, // see comments below regarding port option
    db: 'bourhancorporation',
    username: 'kaddourabdellaziz@gmail.com',
    password: 'rabeh'
});



const odooapi = async () => {
    await odoo.connect();


}
export const odoogetincome = async () => {
  // do get income model
// return all records of a certain model (omit domain)
//const records =  await odoo.searchRead(`caissier.income'`);
return 0
};
 