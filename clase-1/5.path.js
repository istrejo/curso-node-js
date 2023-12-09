const path = require('node:path');

// barra separadora de carpetas según OS
console.log(path.sep);

//unir rutas con path.join
const filePath = path.join('./content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename('C:/Users/josea/Dev/curso-node-js/mjs/1.os-info-js');
console.log(base);

const fileName = path.basename(
	'C:/Users/josea/Dev/curso-node-js/mjs/1.os-info-js',
	'js'
);
console.log(fileName);

const extension = path.extname('image.jpg');
console.log(extension);
