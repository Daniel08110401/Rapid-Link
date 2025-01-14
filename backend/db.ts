const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Rapid Link Local',
  password: 'postgres',
  port: 5432, // Default PostgreSQL port
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
