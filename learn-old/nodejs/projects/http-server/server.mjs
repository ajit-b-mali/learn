// server.js
import http from "node:http"; // import http

// routing logic
import routes from "./routes.mjs"

// create server
const server = http.createServer(routes);

// keep listen for requests
server.listen(3000, () => {
	console.log('Server running at http://localhost:3000/');
});

 