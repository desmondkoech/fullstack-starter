const Database = require('better-sqlite3');
const db = new Database('backend/data.db');
db.exec(CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, text TEXT););
try { db.exec(INSERT INTO notes (text) VALUES ('First note')); } catch(e){}
console.log('DB initialized')
