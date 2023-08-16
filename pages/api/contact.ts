import { MongoClient } from "mongodb";

export const contactAPI = async (req, res) => {

    if (req.method === 'POST') {
        const {name, email, msg} = req.body;
        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !msg ||
            msg.trim() === ''
        ) {
            res.status(422).json({msg: 'invalid input'})
            return;
        }

        const newMsg = {
            email,
            name,
            msg,
        };

        console.log('newMsg', newMsg);
        const connectionString = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_pwd}@${process.env.mongodb_cluster}.pk4ybwx.mongodb.net/${process.env.mongodb_db}?retryWrites=true&w=majority`;
        let client;
        try {
            // client = await MongoClient.connect('mongodb+srv://ferdy:Sealteam1@nextjs.pk4ybwx.mongodb.net/?retryWrites=true&w=majority')
            client = await MongoClient.connect(connectionString);
        } catch (e) {
            res.status(500).json({ msg: 'connect db failed'})
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('msg').insertOne(newMsg);
            newMsg.id = result.insertedId;
        } catch (e) {
            client.close();
            res.status(500).json({msg: 'insertOne db failed'});

        }

        res.status(201).json({msg: 'saved', msg : newMsg})

    } 

};

export default contactAPI;