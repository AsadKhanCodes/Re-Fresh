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

// Different Tables
const ConsumerModel = conn.define("consumer", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: DataTypes.STRING,
    hashed_password: DataTypes.STRING.BINARY,
});

const ProducerModel = conn.define("producer", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: DataTypes.STRING,
    hashed_password: DataTypes.STRING.BINARY,
    location: DataTypes.STRING,
})

const ProduceModel = conn.define("produce", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    id_producers: DataTypes.UUID,    
})

const MenuModel = conn.define("menu_items", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: DataTypes.STRING,
    old_price: DataTypes.DECIMAL,
    new_price: DataTypes.DECIMAL,
    max_listed: DataTypes.INTEGER,
    id_producers: DataTypes.UUID,    
})

const MenuProduceBridgeModel = conn.define("menu_items", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    produce_units: DataTypes.INTEGER,
    id_menu_items: DataTypes.UUID,  
    id_produce: DataTypes.UUID,    
})

const TransactionsModel = conn.define("menu_items", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    units: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    time: DataTypes.TIME,
    id_menu_items: DataTypes.UUID,    
})


function sqlQuery(seqlConn, sqlString, modelName){
     return seqlConn.query(sqlString, {
        model: modelName,
        mapToModel: true,
    });
}

// setup to sync all tables in db
(async () => {
    // sync with db, doesn't rewrite if table exists
    ConsumerModel.sync();
    ProducerModel.sync();
    ProduceModel.sync();
    MenuModel.sync();
    MenuProduceBridgeModel.sync();
    TransactionsModel.sync();
})();

// scripts
(async () => {
    
    // console.log(await sqlQuery(conn,"DELETE FROM consumer"));
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

module.exports = {conn, sqlQuery, ConsumerModel}