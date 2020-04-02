const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })

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
