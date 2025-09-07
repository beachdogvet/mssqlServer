
## Setup project
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