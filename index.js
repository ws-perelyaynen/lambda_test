// const express = require('express');
// const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
exports.handler = (event, context, callback) => {
	// TODO implement
	console.log(`**event: ${event}`);
	console.log(`**context: ${context}`);
	callback(null, 'Im here');
	// callback(null, file);
};
