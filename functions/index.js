const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })

admin.initializeApp()

exports.contactUsEmail = functions.https.onRequest((req, res) => {
  const { name, email, subject, body } = req.body
  const gmailEmail = functions.config().gmail.email
  const gmailPassword = functions.config().gmail.password

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  })

  const mailOptions = {
    from: gmailEmail,
    to: 'luis.alvarez@commithub.com',
    subject: 'CommitHub: Contact Us',
    text: `Contact info: ${name} (${email}) \nSubject: ${subject}\nBody: ${body}`,
  }

  cors(req, res, () => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).send(err)
      } else {
        return res.status(200).send(info.response)
      }
    })
  })
})

exports.getProducts = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    return admin
      .firestore()
      .collection('products')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return res.status(404).send('No matching documents')
        }

        const docs = []

        snapshot.forEach(doc => {
          const fullDoc = { id: doc.id }
          Object.assign(fullDoc, doc.data())
          docs.push(fullDoc)
        })

        return res.status(200).send(docs)
      })
      .catch(err => res.status(500).send(err))
  })
})
