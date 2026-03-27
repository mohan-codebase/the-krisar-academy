
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Log all requests for debugging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Common logic for sending email
const handleEmailRequest = async (req, res) => {
    const { type, data } = req.body;

    if (!type || !data) {
        console.error('Missing type or data in request body');
        return res.status(400).json({ message: 'Missing type or data' });
    }

    console.log(`Received ${type} request for ${process.env.RECEIVER_EMAIL || 'default email'}`);

    let subject = '';
    let htmlContent = '';
    const receiverEmail = process.env.RECEIVER_EMAIL || 'info.thekrisaracademy@gmail.com';

    // Verify SMTP config exists
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error('SMTP configuration missing in environment variables');
        return res.status(500).json({ message: 'Server configuration error' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS.replace(/\s+/g, ''),
        },
    });

    const styles = {
        container: `font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background-color: #EEEEEE; border-radius: 8px; overflow: hidden;`,
        header: `background-color: #061E3F; padding: 20px; text-align: center; border-bottom: 4px solid #FFC107;`,
        headerTitle: `color: #FFFFFF; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;`,
        content: `padding: 30px; background-color: #FFFFFF; margin: 20px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);`,
        sectionTitle: `color: #061E3F; border-bottom: 2px solid #FFC107; padding-bottom: 8px; margin-top: 25px; margin-bottom: 15px; font-size: 18px;`,
        fieldLabel: `color: #666666; font-size: 12px; text-transform: uppercase; margin-bottom: 4px; display: block; font-weight: bold;`,
        fieldValue: `color: #000000; font-size: 16px; margin-bottom: 15px; line-height: 1.5;`,
        footer: `background-color: #061E3F; padding: 15px; text-align: center; color: #AAAAAA; font-size: 12px;`,
        accentText: `color: #FFC107; font-weight: bold;`
    };

    const getFieldHtml = (label, value) => `
        <div style="margin-bottom: 16px;">
            <span style="${styles.fieldLabel}">${label}</span>
            <div style="${styles.fieldValue}">${value || 'N/A'}</div>
        </div>
    `;

    try {
        if (type === 'contact') {
            subject = `New Contact Inquiry from ${data.name || 'Unknown'}`;
            const safeMessage = (data.message || '').replace(/\n/g, '<br>');
            htmlContent = `
                <div style="${styles.container}">
                    <div style="${styles.header}">
                        <h1 style="${styles.headerTitle}">Contact <span style="color: #FFC107;">Inquiry</span></h1>
                    </div>
                    <div style="${styles.content}">
                        ${getFieldHtml('Name', data.name)}
                        ${getFieldHtml('Phone', data.phone)}
                        ${getFieldHtml('Email', data.email)}
                        
                        <h2 style="${styles.sectionTitle}">Message</h2>
                        <div style="${styles.fieldValue}; background-color: #f8f9fa; padding: 15px; border-left: 4px solid #FFC107; border-radius: 4px;">
                            ${safeMessage}
                        </div>
                    </div>
                </div>
            `;
        } else if (type === 'admissions') {
            subject = `New Admission Application: ${data.firstName || ''} ${data.lastName || ''}`;
            htmlContent = `
                <div style="${styles.container}">
                    <div style="${styles.header}">
                        <h1 style="${styles.headerTitle}">Admission <span style="color: #FFC107;">Application</span></h1>
                    </div>
                    <div style="${styles.content}">
                        ${getFieldHtml('Full Name', `${data.firstName || ''} ${data.lastName || ''}`)}
                        ${getFieldHtml('Grade', data.grade)}
                        ${getFieldHtml('Phone', data.contactNo)}
                        ${getFieldHtml('Email', data.emailId)}
                    </div>
                </div>
            `;
        }

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: receiverEmail,
            subject: subject,
            html: htmlContent,
            replyTo: data.email || data.emailId
        });

        return res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
};

// Routes
app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'Backend is reachable' }));
app.post('/api/send-email-secure', handleEmailRequest);
app.post('/api/send-email', handleEmailRequest);
app.post('/send-email-secure', handleEmailRequest);
app.post('/send-email', handleEmailRequest);

// Serve Static Files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, 'dist')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Email endpoints active: /api/send-email-secure, /send-email-secure`);
});