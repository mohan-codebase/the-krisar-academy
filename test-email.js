
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables manually since we are running this script directly
dotenv.config();

async function testEmail() {
    console.log('Testing email configuration...');
    console.log(`SMTP Host: ${process.env.SMTP_HOST}`);
    console.log(`SMTP Port: ${process.env.SMTP_PORT}`);
    console.log(`SMTP User: ${process.env.SMTP_USER}`);

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS.replace(/\s+/g, ''), // Remove all spaces
        },
    });

    try {
        console.log('Verifying connection...');
        await transporter.verify();
        console.log('Connection verified successfully!');

        console.log('Sending test email...');
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: 'Test Email from Krisar Academy Debug',
            text: 'If you receive this, the SMTP configuration is valid and working.',
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Test passed!');
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

testEmail();
