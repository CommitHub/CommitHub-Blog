const functions = require('firebase-functions');
const sgMail = require("@sendgrid/mail");
const cors = require("cors")({
  origin: true
});

exports.contactUsEmail = functions.https.onRequest((req, res) => {
  const { name, email, subject, body } = req.body;
  const sendgridKey = functions.config().sendgrid.key
  sgMail.setApiKey(sendgridKey);

  return cors(req, res, () => {
    const msg = {
      from: 'hire.commithub@gmail.com',
      to: 'luis.alvarez@commithub.com',
      subject: subject,
      text: `New email from CommitHub \n Contact info: ${name} (${email}) \n ${body}`
    };


    return sgMail.send(msg);
  })
  .then(() => res.status(200).send('Success'))
  .catch(err => res.status(500).send(err));
});
