// import models from '../models/index.js';
import db from '../config/connection.js';

// export default async (modelName: "Question", collectionName: string) => {
//   try {
//     let modelExists = await models[modelName].db.db.listCollections({
//       name: collectionName
//     }).toArray()

//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// }

const cleanDB = async (): Promise<void> => {
  try {
    await db.dropCollection("Question");
    console.log('Question collection dropped.');
  } catch (err) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
}

export default cleanDB;