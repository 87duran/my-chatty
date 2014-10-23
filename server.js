var onRequest = function(req, res) {

	if (req.method == 'POST') {
		var postData = '';
		req.on('data', function(stuff) {
			postData += stuff.toString();
		});
		req.on('end', function() {
			res.writeHead(201, {
				'Connection': 'close',
				'Content-type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			});
			console.log(JSON.parse(postData));
			messages.push(JSON.parse(messages));
		});
		res.end(JSON.stringify(messages));
	} else if (req.method == 'GET') {
		res.writeHead(200, {
			'Connection': 'close',
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
	});
	res.end(JSON.stringify(messages));
	}
};
http = require('http');
http.createServer(onRequest).listen(8000);
var messages = ['hi you found me!', 'yo what up?'];