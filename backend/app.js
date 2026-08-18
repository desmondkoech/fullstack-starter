const express = require('express');
const Database = require('better-sqlite3');
const db = new Database('backend/data.db');
const app = express();
app.use(express.json());
app.get('/api/notes', (req,res)=>{
  const rows = db.prepare('SELECT * FROM notes').all();
  res.json(rows);
});
app.post('/api/notes',(req,res)=>{
  const info = db.prepare('INSERT INTO notes (text) VALUES (?)').run(req.body.text);
  res.json({id: info.lastInsertRowid});
});
app.listen(3001,()=>console.log('API listening on 3001'))
