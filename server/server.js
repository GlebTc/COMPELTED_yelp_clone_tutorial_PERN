require ("dotenv").config();
const express = require ('express')
const cors = require ('cors');
const db = require('./db');


// https://youtu.be/J01rYl9T3BU?t=7879

const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())
 
// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {

    try {
        const results = await db.query("SELECT * from restaurants")
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
            
        })
    } catch (err) {
        console.log(err)
    }


})

// Get individual restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query('select * from restaurants where id = $1', [req.params.id])
        res.status(200).json({
            status: "success",
            data : {
                restaurant: results.rows[0]
            }
        })
        
    } catch (err) {
        console.log(err)
    }

})

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.price_range])
        console.log(results)
        res.status(201).json({
            status: "success",
            data : {
                restaurant: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err)
    }
    

})

// Update restaurants
app.put('/api/v1/restaurants/:id', async (req, res) => {

    try {
        const results = await db.query(
            "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *", 
            [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.status(200).json({
            status: "success",
            data : {
                restaurant: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err)
    }
})

// Delete restaurant
app.delete('/api/v1/restaurants/:id', async (req,res) => {
    try {
        const results = await db.query(
            "delete from restaurants where id = $1", [req.params.id]
        )
        res.status(204).json({
            status: "success"
        })
    } catch (err) {
        console.log(err)
    }

})

const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`server is up and listeneing on port ${port}`)
})

// INSERT into restaurants (name, location, price_range) values ('taco bell', 'san fran', 3);

// *********** Create Table

// CREATE TABLE products (
//     id INT,
//     name VARCHAR(50),
//     price INT,
//     on_sale boolean
// );

// *********** Drop Table

// DROP TABLE <table name>

// CREATE TABLE restaurants (
//     id BIGSERIAL NOT NULL  PRIMARY KEY,
//     name VARCHAR(50) NOT NULL,
//     location VARCHAR(50) NOT NULL,
//     price_range INT NOT NULL check (price_range >= 1 and price_range <=5)
// );

// INSERT INTO restaurants (id, name, location, price_range) values (123, 'mcdonalds', 'new york', 3);

// INSERT INTO restaurants (name, location, price_range) values ('mcdonalds', 'new york', 3);