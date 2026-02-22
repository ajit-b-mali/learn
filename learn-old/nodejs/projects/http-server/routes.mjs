import fs from "node:fs";

const homePage = `
<html>
	<head>
		<title>Homepage</title>
	</head>
	<body>
		<form action="/feedback" method="POST">
			<input type="text" name="name" placeholder="name" required><br>
			<input type="text" name="feedback" placeholder="Feedback" required><br>
			<button type="submit">Send</button>
		</form>
	</body>
</html>
`;

const notFoundPage = `
<html>
	<head>
		<title>Page not found</title>
	</head>
	<body>
		<h1>Error: 404<br>Page not found</h1>
	</body>
</head>
`;

function requestHandler(req, res) {
    switch (req.url) {
    case "/":
        res.setHeader('Content-Type', 'text/html');
        res.end(homePage);
        break;
    
    case "/feedback":
        if (req.method == "POST") {
            const body = [];
            req.on("data", (/** @type {any} */ chunk) => {
                body.push(chunk);
            });
            req.on("end", () => {
                const parsedBody = Buffer.concat(body).toString();
                fs.writeFileSync("feedback.txt", parsedBody);
                res.statusCode = 302;
                res.setHeader("Location", "/");
                res.end();
            });
        } else if (req.method == "GET") {
            res.setHeader("Content-Type", "text/html");
            res.end("can not access this page directly with GET");
        }
        break;
    
    default:
        res.setHeader('Content-Type', 'text/html');
        res.end(notFoundPage);
        break;
    }
}

export default requestHandler