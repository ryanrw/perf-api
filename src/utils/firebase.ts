import admin from "firebase-admin"
import key from "../serviceAccountKey.json"
import { Data } from "data"

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
