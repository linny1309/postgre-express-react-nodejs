const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Hollylibertyx8!",
    host: "localhost",
    port: 5432,
    database: "pern"
})

module.exports = pool