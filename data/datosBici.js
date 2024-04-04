const fs = require('fs');

const bicicletasJSON = fs.readFileSync('./bicicletas.json','utf-8');
const bicicletasArray = () => {
return JSON.parse(bicicletasJSON);}


/* console.log(bicicletasArray);
 */
module.exports = bicicletasArray 