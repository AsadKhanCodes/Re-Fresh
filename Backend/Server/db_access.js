const  { Sequelize, Model, DataTypes, QueryTypes } = require("sequelize-cockroachdb");
var conn = new Sequelize({
  dialect: "postgres",
  username: "aryan",
  password: "4659Dwarriors",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  database: "re-fresh-3057.refresh_backend",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      // For secure connection:
      /*ca: fs.readFileSync('certs/ca.crt')
                .toString()*/
    },
  },
  logging: false,
});

const ConsumerModel = conn.define("consumer", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: DataTypes.STRING,
    hashed_password: DataTypes.STRING.BINARY,
});

function sqlQuery(seqlConn, sqlString, modelName){
     return seqlConn.query(sqlString, {
        model: modelName,
        mapToModel: true,
    });
}

(async () => {
    ConsumerModel.sync(); // sync with db, doesn't rewrite if table exists

//
//
//    var consumers = await sqlQuery(conn, "SELECT * FROM consumer", ConsumerModel); // read all from consumer table
//    console.log(consumers.length);
//
//    // add some data
//    await sqlQuery(conn,"INSERT INTO consumer (name, hashed_password) VALUES ('mo', 'hash')", ConsumerModel);
//    consumers = await sqlQuery(conn, "SELECT * FROM consumer", ConsumerModel); // read all from consumer table
//    console.log(consumers.length);
//
//    // delete that data
//    await sqlQuery(conn,"DELETE FROM consumer WHERE name='mo'");
//    consumers = await sqlQuery(conn, "SELECT * FROM consumer", ConsumerModel); // read all from consumer table
//    console.log(consumers.length);
//
//    await sqlQuery(conn,"INSERT INTO consumer (name, hashed_password) VALUES ('mo', 'fake hash')", ConsumerModel);
//    consumers = await sqlQuery(conn, "SELECT * FROM consumer", ConsumerModel); // read all from consumer table
//    console.log(consumers.length);
//
//
//    console.log("Update test")
//    consumers = await sqlQuery(conn, "SELECT * FROM consumer WHERE name='mo'", ConsumerModel); // read all from consumer table
//    console.log(consumers[0])
//    await await sqlQuery(conn, "UPDATE consumer SET hashed_password = 'diff hash' WHERE name = 'mo'", ConsumerModel);
//
//    consumers = await sqlQuery(conn, "SELECT * FROM consumer WHERE name='mo'", ConsumerModel); // read all from consumer table
//    console.log(consumers[0])

})();
