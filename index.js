// const express = require('express');
// const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
const fs = require('fs');
exports.handler = (event, context, callback) => {
	// TODO implement
	console.log(`**event: ${event}`);
	console.log(`**context: ${context}`);
	var file = fs.readFileSync('./index.html');
	callback(null, file);
};
