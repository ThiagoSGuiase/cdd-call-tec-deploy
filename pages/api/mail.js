const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Nome: ${body.name}\r\n
    Telefone: ${body.phone}\r\n
    E-mail: ${body.email}\r\n
    Endereço: ${body.address}, ${body.addressNumber}\r\n
    Cidade: ${body.city}\r\n
  `;
  
  const data = {
    to: 'cdd.forms@gmail.com',
    from: 'cdd.forms@gmail.com',
    subject: 'Novo formulário! 📑',
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