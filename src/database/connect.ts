import * as mongoose from 'mongoose';
import * as config from '../config/config';

const dbConfig = config.config.db.mongo;
console.log(dbConfig.connectionString + "\n" + dbConfig.connectionUser + "\n" + dbConfig.connectionPassword);

// const db = mongoose.createConnection(
//     dbConfig.connectionString,
//     {
//         useNewUrlParser: true,
//         poolSize: dbConfig.connectionPoolSize,
//         w: 1,
//         authSource: 'grad',
//         user: dbConfig.connectionUser,
//         pass: dbConfig.connectionPassword
//     }
// )

mongoose.connect("mongodb://localhost:27017/grad");

const db = mongoose.connection;

db.on('error', console.error.bind('connection error: '));
db.once('open', () => {
    console.log('Connection to MongoDB is established!');
});

export { db, mongoose };