import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3af527d250a5b3",
        pass: "fb2dec1cae9d60"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body } : SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Jonatas Lopes <jonatas.ti.sistema@gmail.com>',
            subject,
            html: body
        });
    }
}