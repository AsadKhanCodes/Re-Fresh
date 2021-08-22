import React from 'react';
import ReactDOM from 'react-dom';
import BasicTable from './Optimization/Table'
import App from './App'
ReactDOM.render(
  <React.StrictMode>
 
   <BasicTable/>
  </React.StrictMode>,
  document.getElementById('root')
);

// const db = require('./db_access');
// (async () => {
    
//   // console.log(await sqlQuery(conn,"DELETE FROM consumer"));
// //
// //
//    var consumers = await db.sqlQuery(db.conn, "SELECT * FROM consumer", db.ConsumerModel); // read all from consumer table
//    console.log(consumers.length);
// //
// //    // add some data
// //    await sqlQuery(conn,"INSERT INTO consumer (name, hashed_password) VALUES ('mo', 'hash')", ConsumerModel);
// //    consumers = await sqlQuery(conn, "SELECT * FROM consumer", ConsumerModel); // read all from consumer table
// //    console.log(consumers.length);
// //
// //    // delete that data
// //    await sqlQuery(conn,"DELETE FROM consumer WHERE name='mo'");
// //    consumers = await sqlQuery(conn, "SELECT * FROM consumer", ConsumerModel); // read all from consumer table
// //    console.log(consumers.length);
// //
// //    await sqlQuery(conn,"INSERT INTO consumer (name, hashed_password) VALUES ('mo', 'fake hash')", ConsumerModel);
// //    consumers = await sqlQuery(conn, "SELECT * FROM consumer", ConsumerModel); // read all from consumer table
// //    console.log(consumers.length);
// //
// //
// //    console.log("Update test")
// //    consumers = await sqlQuery(conn, "SELECT * FROM consumer WHERE name='mo'", ConsumerModel); // read all from consumer table
// //    console.log(consumers[0])
// //    await await sqlQuery(conn, "UPDATE consumer SET hashed_password = 'diff hash' WHERE name = 'mo'", ConsumerModel);
// //
// //    consumers = await sqlQuery(conn, "SELECT * FROM consumer WHERE name='mo'", ConsumerModel); // read all from consumer table
// //    console.log(consumers[0])
// })();
