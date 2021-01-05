module.exports = {
  apps: [
    {
      name: 'react-nest-v3',
      script: 'dist/main.js',

      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
