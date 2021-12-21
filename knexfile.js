// require('dotenv').config()

// const pg = require('pg')

// if (process.env.DATABASE_URL) {
//   pg.defaults.ssl = { rejectUnauthorized: false }
// }

// const sharedConfig = {
//   client: 'pg',
//   migrations: { directory: './api/data/migrations' },
//   seeds: { directory: './api/data/seeds' },
// }

// module.exports = {
//   development: {
//     ...sharedConfig,
//     connection: process.env.DEV_DATABASE_URL,
//   },
//   testing: {
//     ...sharedConfig,
//     connection: process.env.TESTING_DATABASE_URL,
//   },
//   production: {
//     ...sharedConfig,
//     connection: process.env.DATABASE_URL,
//     pool: { min: 2, max: 10 },
//   },
// }



const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
  }
  
  module.exports = {
    development: {
      ...sharedConfig,
      connection: { filename: './data/auth.db3' },
      seeds: { directory: './data/seeds' },
    },
    testing: {
      ...sharedConfig,
      connection: { filename: './data/test.db3' },
    },
  };