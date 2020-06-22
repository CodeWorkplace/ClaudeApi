import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

const getClient = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
            if (err) {
                console.log('[mongodb]', err);
                reject(err);
                return;
            }
            console.log('[mongodb]', "Connected successfully to server");

            resolve(client);
        });
    });
};

export async function getDB(){
    const client: any = await getClient();
    const db = client.db('db_kroraina_claude');
    return db;
}