const { MongoClient }  = require("mongodb")

const url =
 "mongodb+srv://nitinpurohit412_db_user:ueHLnVZhqidmGSQy@namastenode.pfchm6l.mongodb.net/" 

const client = new MongoClient(url)

const dbName = "HelloWorld"

async function main() {
    await client.connect();
    console.log("Connected sucessfully to server")
    const db = client.db(dbName)
    const collection = db.collection("User")

    //*  Insert
    const data = {
        firstname : "Harshit",
        lastname : "Purohit",
        city : "Churu",
        phonenumber : "9876543210"
    }
    const  insertResult = await collection.insertMany([data])
    console.log("Inserted  documents => ", insertResult)

    //*  Read
    const findResult = await collection.find({}).toArray();
    console.log("Found documents => ",  findResult)


    return "done."
}

main()
  .then(console.log )
  .catch(console.error)
  .finally(()=> client.close())