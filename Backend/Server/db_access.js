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
    (async () => {
    return await seql_conn.query("SELECT" +columns+ " FROM " +table_name, {

        model: modelName,
        mapToModel: true,
    });
    })();
}

function insertInto(seql_conn, table_name, columns, values, modelName){
    (async () => {
    return await seql_conn.query("INSERT INTO " + table_name + " " + columns + " VALUES " + values, {
        model: modelName,
        mapToModel: true,
    });
    })();
}


//(async () => {
//    ConsumerModel.sync();
//    var consumers = await readFrom(db_conn, "consumer", "*", ConsumerModel);
//    console.log(consumers.length);
////    await insertInto(db_conn, "consumer", "(name, hashed_password)", "('lol', 'totally valid hash')");
//    console.log(await readFrom(db_conn, "consumer", "*", ConsumerModel));
////    console.log(consumers.every(consumer => consumer instanceof ConsumerModel)); // true
////    console.log("All users:", JSON.stringify(consumers, null, 2));
//})();

var consumers = readFrom(db_conn, "consumer", "*", ConsumerModel);
console.log(consumers.length);