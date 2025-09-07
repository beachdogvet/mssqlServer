// dbConfig.js
module.exports = {
  user: 'sa',
  password: 'P@ssw0rd12',
  server: 'localhost', // e.g., 'localhost' or '192.168.1.100'
  database: 'AdventureWorks',
  options: {
    encrypt: false, // Use true if you're on Azure
    trustServerCertificate: true // Use true for local dev
  }
};
