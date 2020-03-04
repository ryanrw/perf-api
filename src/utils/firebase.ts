import admin from "firebase-admin"
import { Data } from "data"
import fs from "fs"

import key from "../serviceAccountKey.json"

const hasKey = key

const serviceAccount: admin.ServiceAccount = hasKey
  ? JSON.parse(JSON.stringify(key))
  : ""

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-2-9f38b.firebaseio.com",
})

export async function sendResultToDatabase(docName: string, result: Data) {
  try {
    const db = admin.firestore()
    const collection = db.collection("test-case")
    const document = collection.doc(docName)

    await document.update({
      data: admin.firestore.FieldValue.arrayUnion(result),
    })

    console.log(`Add data to cloud seccessfully`)
  } catch (error) {
    console.error(error)
  }
}

/**
 * retrieve data from database
 * @param docName document name from Firebase database
 */
export function getDataFromDatabase(docName: string) {
  const db = admin.firestore()
  const collection = db.collection("test-case")
  const document = collection.doc(docName)

  document
    .get()
    .then(doc => {
      const data = doc.data().data.map((item: any) => item.duration)

      writeDataIntoFile(data, docName)
    })
    .catch(err => {
      console.error(err)
    })
}

/**
 * Write input data into json file
 * @param data - any data to write into file
 * @param filename
 */
function writeDataIntoFile<T>(data: T, filename: string) {
  const json = JSON.stringify(data, null, 2)

  fs.writeFileSync(`${filename}.json`, json)
}
