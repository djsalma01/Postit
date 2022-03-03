const express = require('express');
const router = express.Router();


const mysqlConnection  = require('../database.js');

// GET all Employees
router.get('/api/notes', (req, res) => {

  let sql = 'SELECT * from notes';

  mysqlConnection.query(sql, (err, results) => {
    if(err) throw err;
    res.json(results);
  
  });  
});

// Select single note with id
router.get('/api/notes/:id', (req, res) => {
  let sql = `SELECT * FROM notes where id = ${req.params.id}`;
  mysqlConnection.query(sql, (err, results) => {
      if(err) throw err;
      res.json(results);
  });
});


///POst une note
router.post('/api/notes',(req, res) => {
  const datas= req.body;
  console.log(datas);
  mysqlConnection.query("INSERT INTO notes (title , description ) VALUES ('?','?')", [datas.title, datas.description], (err, results) => {                 
    if(err) {
        console.log(err);
       res.send(err);
    } else {
      res.json(results);      }
    })
});
//Update one note
router.put('/api/notes/:id',(req, res) => {
  const data= req.body;
  const id = req.params.id;
  mysqlConnection.query("UPDATE notes SET title = ?, description = ? WHERE id = ?", [data.title, data.description, id], (err, results) => {             
      if(err) {
          console.log(err);
         res.send(err);
      } else {
        res.json(results);      }
  });  
});
// Delete note
router.delete('/api/notes/:id', (req, res) => {
  console.log(req.params.id);
  let sql = `DELETE FROM notes WHERE id = ${req.params.id}`;
  mysqlConnection.query(sql, (err, results) => {
      if(err) throw err;
      res.json(results);
  });
});


module.exports = router;
