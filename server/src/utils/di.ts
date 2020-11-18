import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer';
import { container, instanceCachingFactory } from 'tsyringe';
import { Connection, ConnectionManager } from 'typeorm';
import config from '../config';

const { host, password, secure, user, port } = config.email;

const register = (connection: Connection) => {
  container.register<Connection>(Connection, { useValue: connection });
  container.register<ConnectionManager>(ConnectionManager, {
    useFactory: instanceCachingFactory(() => new ConnectionManager())
  });

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

  container.register<Mail>(Mail, {
    useValue: transporter
  });
};

export default { register };
