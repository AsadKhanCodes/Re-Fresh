const  { Sequelize, Model, DataTypes, QueryTypes } = require("sequelize-cockroachdb");
var db_conn = new Sequelize({
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

const ConsumerModel = db_conn.define("consumer", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: DataTypes.STRING,
    hashed_password: DataTypes.STRING.BINARY,
});

function readFrom(seql_conn, table_name, columns, modelName){

    return seql_conn.query("SELECT" +columns+ " FROM " +table_name, {
        model: modelName,
        mapToModel: true,
    });
}

function insertInto(seql_conn, table_name, columns, values, modelName){
    return seql_conn.query("INSERT INTO " + table_name + " " + columns + " VALUES " + values, {
        model: modelName,
        mapToModel: true,
    });
}


(async () => {
    ConsumerModel.sync(); // sync with db, doesn't rewrite if table exists
    var consumers = await readFrom(db_conn, "consumer", "*", ConsumerModel); // read all from consumer table
    console.log(consumers);
    console.log(consumers.length);
})();
