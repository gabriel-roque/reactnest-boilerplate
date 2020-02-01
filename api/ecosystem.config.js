const path = require("path");

module.exports = {
  apps: [
    {
      name: "app",
      script: "server.js",
      instances: 1,
      autorestart: true, // THIS is the important part, this will tell PM2 to restart your app if it falls over
      max_memory_restart: "1G"
    }
  ]
};
