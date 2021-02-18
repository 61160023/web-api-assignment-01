// Load mongo driver
const MongoClient = require('mongodb').MongoClient

// Create mongo client
const url = 'mongodb+srv://superadmin:<7338>@cluster0.12d6p.mongodb.net/<sample_mflix>?retryWrites=true&w=majority'
const client = new MongoClient(url, { useNewUrlParser: true})

async function run() {
    try {

    // Create Connection to mongodb
    await client.connect()

    // Connect to database
    const db = client.db('sample_mflix')

    // Retrieve collection
    const collection = db.collection('movies')

    // Query data
    const query = { title: 'Blacksmith Scene' }
    const movie = await collection.findOne(query)
    console.log(movie)

    } catch(e) {
        console.log(e)
    } finally {
        await client.close()
    } 
}

run().catch(console.dir)