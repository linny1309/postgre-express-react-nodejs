const express = require("express")
const app = express();
const cors = require("cors")
const pool = require("./db")

//Middleware
app.use(cors())
app.use(express.json())

//Routes

//Post action
app.post("/actions", async (req,res) => {
    try {
        const { action_desc } = req.body;
        const newAction = await pool.query(
            "INSERT INTO action_info (action_desc) VALUES($1) RETURNING *", 
            [action_desc]
        )
        res.json(newAction.rows[0])
    } catch(err) {
        console.log(err.message)
    }
})

//Get all actions
app.get("/actions", async(req, res) => {
    try {
        const allActions = await pool.query("SELECT * FROM action_info")
        res.json(allActions.rows)
    } catch(err) {
        console.log(err.message)
    }
})

//Get specific action
app.get("/actions/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const action = await pool.query(
            "SELECT * FROM action_info WHERE action_id = $1", 
            [id]
        )
        res.json(action.rows[0])
    } catch(err) {
        console.error(err.message)
    }
})

//Update an action
app.put("/actions/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { action_desc } = req.body;
        const updateAction = await pool.query(
            "UPDATE action_info SET action_desc = $1 WHERE action_id = $2",
            [action_desc, id],
        );
        res.json("Action was updated.")
    } catch(err) {
        console.error(err.message)       
    }
})

//Delete an action
app.delete("/actions/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteAction = await pool.query(
            "DELETE FROM action_info WHERE action_id = $1", 
            [id]
        )
        res.json("Action was deleted.")
    } catch(err) {
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})