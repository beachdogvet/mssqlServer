// index.js
const sql = require('mssql');
const config = require('./dbConfig');

const express = require('express');
const cors = require('cors');


const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/data', async (req, res) => {
  try 
  {
    await sql.connect(config);

    const result = await sql.query('SELECT TOP 10 [ContactID],[Title] ,[FirstName],[MiddleName], \
        [LastName],[EmailAddress],[Phone] FROM [AdventureWorks].[Person].[Contact]');

    res.json(result.recordset);

  } 
  catch (err) 
  {
    console.error('SQL error', err);
    res.status(500).send('Server error');
  } 
  finally 
  {
    await sql.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});














/* async function queryDatabase() {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT [ContactID],[Title] ,[FirstName],[MiddleName], \
        [LastName],[EmailAddress],[Phone] FROM [AdventureWorks].[Person].[Contact]');
    console.log(result.recordset);
  } catch (err) {
    console.error('SQL error', err);
  } finally {
    await sql.close();
  }
}

queryDatabase(); */
