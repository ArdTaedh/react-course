import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.wyc1k.mongodb.net/next-course?retryWrites=true&w=majority')
        const db = client.db()

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)

        console.log(result)

        await client.close()

        res.status(201).json({message: 'Meetup inserted'})
    }
}

export default handler