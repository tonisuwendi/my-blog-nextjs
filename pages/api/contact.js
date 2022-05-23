import { MongoClient } from 'mongodb';

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env;

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({
                success: false,
                message: 'Input invalid.',
            });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };
        
        let client;
        try {
            client = await MongoClient.connect(
                `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0-shard-00-00.xscsd.mongodb.net:27017,cluster0-shard-00-01.xscsd.mongodb.net:27017,cluster0-shard-00-02.xscsd.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
            );
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' });
            return;
        }

        const db = client.db(MONGODB_DATABASE);

        try {
            const result = await db.collection('message').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed.' });
            return;
        }

        client.close();

        res.status(201).json({
            success: true,
            message: 'Inserted database successfully!',
            data: newMessage,
        });
    }
}

export default handler;
