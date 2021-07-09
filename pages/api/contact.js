// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config();

import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, phone, address, city } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, 
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass : process.env.EMAIL_PASS
    }
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'cddcred.business@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p></br>
      <p><strong>Phone: </strong> ${phone} </p></br>
      <p><strong>Email: </strong> ${email} </p></br>
      <p><strong>Address: </strong> ${address} </p></br>
      <p><strong>City: </strong> ${city} </p></br>
      `
    });

    console.log('Message Sent', emailRes.messageId)
  } catch (error) {
    console.log(err);
  }
  
  res.status(200).json(req.body)
}
