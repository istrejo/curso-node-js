const fs = require('node:fs/promises');

fs.readdir('.')
	.then((files) => {
		files.forEach((file) => {
			console.log(file);
		});
	})
	.catch((err) => {
		if (err) {
			console.error(err);
			return;
		}
	});
