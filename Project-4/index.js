const http = require('http');

let users = [
  { id: 1, name: "Hassen", email: "hassenn45@gmail.com" },
  { id: 2, name: "Monica Geller", email: "monica675@gmail.com" },
  { id: 3, name: "Emily Green", email: "Emily234@gmail.com" },
  { id: 4, name: "Joey Brown", email: "joey125@gmail.com" },
];

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if (method === 'GET' && url === '/users') {
    handleGetUsers(req, res);
  } else if (method === 'POST' && url === '/users') {
    handleAddUser(req, res);
  } else if (method === 'PUT' && url.startsWith('/users/')) {
    handleUpdateUser(req, res);
  } else if (method === 'DELETE' && url.startsWith('/users/')) {
    handleDeleteUser(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route Not Found');
  }
});

function handleGetUsers(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users));
}

function handleAddUser(req, res) {
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const newUser = JSON.parse(body);
    newUser.id = users.length + 1;
    users.push(newUser);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newUser));
  });
}

function handleUpdateUser(req, res) {
  const id = parseInt(req.url.split('/')[2]);
  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const updatedData = JSON.parse(body);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('User Not Found');
      return;
    }

    users[userIndex] = { ...users[userIndex], ...updatedData };  //overwrite

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users[userIndex]));
  });
}

function handleDeleteUser(req, res) {
  const id = parseInt(req.url.split('/')[2]);
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('User Not Found');
    return;
  }

  users.splice(userIndex, 1);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('User Deleted');
}
const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

 