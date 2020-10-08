import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import config from '../../config';

const { host, password, secure, user, port } = config.email;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  requireTLS: true,
  auth: {
    user,
    pass: password
  }
});

export const sendMail = (mailOptions: MailOptions) => {
  return transporter.sendMail({
    from: 'franzp31@gmail.com',
    ...mailOptions
  });
};
