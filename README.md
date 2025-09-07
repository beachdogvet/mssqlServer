
This project was designed with the intent of connecting and querying a MSSQL database 


## Setup project
- start vscode
#### In a terminal session

- mkdir sqlserver-node-app
- cd sqlserver-node-app 
- npm init -y
- npm install mssql

#### Step 2
- Create a file called dbConfig.js
- Add the following code
```

module.exports = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server_address', // e.g., 'localhost' or '192.168.1.100'
  database: 'your_database_name',
  options: {
    encrypt: true, // Use true if you're on Azure
    trustServerCertificate: true // Use true for local dev
  }
};
```
#### Step 3 <span style="font-size:12px">(To test connectivity to your database)</span>
- create a file index.js
- add the following code
```
const sql = require('mssql');
const config = require('./dbConfig');

async function queryDatabase() {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM your_table_name');
    console.log(result.recordset);
  } catch (err) {
    console.error('SQL error', err);
  } finally {
    await sql.close();
  }
}

queryDatabase();
```
#### Step 4
- run the app
    >  node index.js


## Troubleshooting 
If you get database connection errors:
- SQL Server must have TCP/IP enabled.
- In SQL Server Configuration Manager
    > - Go to SQL Server Network Configuration > Protocols for MSSQLSERVER
    > - Enable TCP/IP
    > - Restart SQL Server service