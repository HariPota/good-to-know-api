const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "good-to-know-api",
    password: "12345678",
    database: "good-to-know-api",
    port: "8738"
  },
  listPerPage: 11,
};
module.exports = config;