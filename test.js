const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sun_music_db", "postgres", "root", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: console.log,
});

async function testConnection() {
  try {
    await sequelize.authenticate();

    const [result] = await sequelize.query(
      "SELECT inet_server_addr(), inet_server_port()"
    );

    console.log(result);

    console.log("✅ Connected");
  } catch (error) {
    console.error(error);
  }
}

testConnection();