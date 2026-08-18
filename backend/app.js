// Minimal Express server
const express = require('express');
const app = express();
app.get('/api/hello', (req, res) => res.json({msg: 'Hello from backend'}));
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(Listening ));
