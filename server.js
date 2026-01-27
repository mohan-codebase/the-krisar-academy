
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Re-use logic from api/send-email.js
app.post('/api/send-email', async (req, res) => {
    const { type, data } = req.body;

    if (!type || !data) {
        return res.status(400).json({ message: 'Missing type or data' });
    }

    console.log(`Received ${type} request for ${process.env.RECEIVER_EMAIL}`);

    let subject = '';
    let htmlContent = '';
    const receiverEmail = process.env.RECEIVER_EMAIL || 'info.thekrisaracademy@gmail.com';

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : undefined,
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
            subject = `New Contact Inquiry from ${data.name}`;
            htmlContent = `
                <div style="${styles.container}">
                    <div style="${styles.header}">
                        <h1 style="${styles.headerTitle}">Contact <span style="color: #FFC107;">Inquiry</span></h1>
                    </div>
                    <div style="${styles.content}">
                        ${getFieldHtml('Name', data.name)}
                        ${getFieldHtml('Phone', `<a href="tel:${data.phone}" style="color: #061E3F; text-decoration: none;">${data.phone}</a>`)}
                        ${getFieldHtml('Email', `<a href="mailto:${data.email}" style="color: #061E3F; text-decoration: none;">${data.email}</a>`)}
                        
                        <h2 style="${styles.sectionTitle}">Message</h2>
                        <div style="${styles.fieldValue}; background-color: #f8f9fa; padding: 15px; border-left: 4px solid #FFC107; border-radius: 4px;">
                            ${data.message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <div style="${styles.footer}">
                        &copy; ${new Date().getFullYear()} The Krisar Academy. All rights reserved.
                    </div>
                </div>
            `;
        } else if (type === 'admissions') {
            subject = `New Admission Application: ${data.firstName} ${data.lastName}`;
            htmlContent = `
                <div style="${styles.container}">
                    <div style="${styles.header}">
                        <h1 style="${styles.headerTitle}">Admission <span style="color: #FFC107;">Application</span></h1>
                    </div>
                    
                    <div style="${styles.content}">
                        <h2 style="${styles.sectionTitle}">Student Information</h2>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            ${getFieldHtml('Full Name', `${data.firstName} ${data.lastName}`)}
                            ${getFieldHtml('Date of Birth', `${data.dob} (Age: ${data.age})`)}
                            ${getFieldHtml('Gender', data.gender)}
                            ${getFieldHtml('Blood Group', data.bloodGroup)}
                            ${getFieldHtml('Grade Seeking', `<span style="${styles.accentText}; color: #061E3F; background-color: #FFC107; padding: 2px 6px; border-radius: 3px;">${data.grade}</span>`)}
                            ${getFieldHtml('Place', data.place)}
                        </div>
                        ${getFieldHtml('Previous School', data.previousSchool)}

                        <h2 style="${styles.sectionTitle}">Parent Information</h2>
                        
                        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                            <h3 style="color: #061E3F; margin-top: 0;">Father's Details</h3>
                            ${getFieldHtml('Name', data.fatherName)}
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                                ${getFieldHtml('Qualification', data.fatherQual)}
                                ${getFieldHtml('Occupation', data.fatherOccup)}
                                ${getFieldHtml('Mobile', data.fatherContact)}
                                ${getFieldHtml('Email', data.fatherEmail)}
                            </div>
                        </div>

                        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px;">
                            <h3 style="color: #061E3F; margin-top: 0;">Mother's Details</h3>
                            ${getFieldHtml('Name', data.motherName)}
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                                ${getFieldHtml('Qualification', data.motherQual)}
                                ${getFieldHtml('Occupation', data.motherOccup)}
                                ${getFieldHtml('Mobile', data.motherContact)}
                                ${getFieldHtml('Email', data.motherEmail)}
                            </div>
                        </div>

                        <h2 style="${styles.sectionTitle}">Final Details</h2>
                        ${getFieldHtml('Residential Address', data.address)}
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            ${getFieldHtml('Primary Contact', data.contactNo)}
                            ${getFieldHtml('Primary Email', data.emailId)}
                        </div>
                        <div style="margin-top: 20px; padding: 10px; background-color: #e3f2fd; border-radius: 4px; color: #0d47a1; font-size: 12px;">
                            <strong>Declaration Accepted:</strong> ${data.declaration ? 'Yes' : 'No'}
                        </div>
                    </div>
                     <div style="${styles.footer}">
                        &copy; ${new Date().getFullYear()} The Krisar Academy. All rights reserved.
                    </div>
                </div>
            `;
        } else {
            return res.status(400).json({ message: 'Invalid form type' });
        }

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: receiverEmail,
            subject: subject,
            html: htmlContent,
            replyTo: data.email || data.emailId
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Local API Server running on http://localhost:${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/api/send-email`);
});
