import Mail from 'nodemailer/lib/mailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { inject, singleton } from 'tsyringe';

@singleton()
class EmailService {
  constructor(@inject(Mail) private transporter: Mail) {}

  sendMail = (mailOptions: MailOptions) => {
    return this.transporter.sendMail({
      from: 'franzp31@gmail.com',
      ...mailOptions
    });
  };
}

export default EmailService;
