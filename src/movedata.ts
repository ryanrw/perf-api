import "./utils/firebase"

import admin from "firebase-admin"

const firestore = admin.firestore()

const collection = firestore.collection("test-case")

const document = collection.doc("micro-createuser")
const newDocument = collection.doc("micro-loginuser")

interface Data {
  name: string
  duration: number
}

interface LoginData {
  data: Data[]
}

document.get().then(items => {
  const getAllPostData = items.data() as LoginData
  const allgetAllPostTestResult = getAllPostData.data

  const getAllPostDataStartPosition = 500

  const createUserResult = allgetAllPostTestResult.slice(
    getAllPostDataStartPosition
  )

  createUserResult.forEach(data => {
    newDocument.update({
      data: admin.firestore.FieldValue.arrayUnion(data),
    })

    document.update({
      data: admin.firestore.FieldValue.arrayRemove(data),
    })
  })
})
