const conn = require('../../config/database');
const router = require('express').Router();




// Get All Employee Data
router.get('/api/employees', (req,res)=>{
    const sql = `SELECT * FROM employees`;
    conn.query(sql, (err, result)=>{
        if (err) {
            return res.status(500).send({err});
        }
        else {
            res.status(200).send(result);
        }
    })
});


// Get data by id employees
router.get('/api/employees/:id', (req,res)=>{
    const sql = `SELECT * FROM employees WHERE id = ${req.params.id}`;
    conn.query(sql, (err, result)=>{
        if (err) {
            return res.status(500).send({err});
        }
        else {
            res.status(200).send(result);
        }

    })
});

// Post or Insert data to employees
router.post('/api/employees', (req,res)=>{
    const sql = `INSERT INTO employees SET ?`;
    const data = req.body;

    conn.query(sql, data, (err, result)=>{
        if (err) {
            return res.status(500).send({err})
        }
        else {
            res.status(201).send(result);
        }
    })
});

// PUT or update data in employees
router.put('/api/employees/:id', (req,res)=>{
    const sql = `UPDATE employees SET ? WHERE id = ${req.params.id}`;
    const data = req.body;

    conn.query(sql, data, (err, result)=>{
        if (err) {
            return res.status(500).send({err})
        }
        else {
            res.status(200).send(result);
        }
    })
});

// DELETE data employee
router.delete('/api/employees/:id', (req,res)=>{
    const sql = `DELETE FROM employees WHERE id = ${req.params.id}`;

    conn.query(sql, (err, result)=>{
        if (err) {
            return res.status(500).send({err})
        }
        else {
            res.status(204).send(result);
        }
    })
});






module.exports = router;