const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}\r\n
  `;
  
  const data = {
    to: 'cdd.forms@gmail.com',
    from: 'cdd.forms@gmail.com',
    subject: 'New web form message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  };

 try {
  await mail.send(data);
  res.status(200).json({ status: 'Ok' })
 } catch (error){
  res.status(500).json({ error: 'Error sending email' })
 };
}