const MongoClient = require('mongodb').MongoClient

const url = 'mongodb+srv://superadmin:bel123456@cluster0.12d6p.mongodb.net/sample_restaurants?retryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true})

async function run() {
    try {
        await client.connect()
        const db = client.db('sample_restaurants')
        const collection = db.collection('restaurants')
        const query = { cuisine: 'American'}
        const cursor = collection.find(query)
        await cursor.forEach(console.dir)
    }   catch(e) {
        console.log(e)
    }finally{
        await client.close()
    }
}

run().catch(console.dir)