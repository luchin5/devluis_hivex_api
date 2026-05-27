import pgPromise from "pg-promise";

const pgp = pgPromise();
const conectionString = "postgres://postgres:1234@localhost:5432/hivex";

const db = pgp({
    connectionString: conectionString,
    ssl: false,
})

try{
    db.connect()
    .then(obj=>{
        console.log("HIVEX DB CONNECTED !");
        obj.done();
    })
    .catch(err=>{
        console.log("NO CONNECTED HIVEX:",err);
    })
    //
}
catch(err){
    console.log(`ERROR CONFIGURATION: ${err}`);
}

export default db;