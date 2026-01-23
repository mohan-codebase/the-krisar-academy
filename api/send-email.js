
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { type, data } = req.body;

    if (!type || !data) {
        return res.status(400).json({ message: 'Missing type or data' });
    }

    // Configure transporter using environment variables (Vercel)
    // Ensure these are set in your Vercel project settings or .env.local for development
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com', // Default to Gmail if not set
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    let subject = '';
    let htmlContent = '';
    const receiverEmail = process.env.RECEIVER_EMAIL || 'info.thekrisaracademy@gmail.com';  // Fallback if env not set

    try {
        if (type === 'contact') {
            subject = `New Contact Inquiry from ${data.name}`;
            htmlContent = `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
        } else if (type === 'admissions') {
            subject = `New Admission Application: ${data.firstName} ${data.lastName}`;
            // Format complex admission data
            htmlContent = `
        <h2>New Admission Application</h2>
        <h3>Student Information</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>DOB:</strong> ${data.dob} (Age: ${data.age})</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Blood Group:</strong> ${data.bloodGroup || 'N/A'}</p>
        <p><strong>Grade Seeking:</strong> ${data.grade}</p>
        <p><strong>Previous School:</strong> ${data.previousSchool || 'N/A'}</p>
        <p><strong>Place:</strong> ${data.place}</p>

        <h3>Parent Information</h3>
        <h4>Father</h4>
        <p><strong>Name:</strong> ${data.fatherName}</p>
        <p><strong>Qualification:</strong> ${data.fatherQual || 'N/A'}</p>
        <p><strong>Occupation:</strong> ${data.fatherOccup || 'N/A'}</p>
        <p><strong>Income:</strong> ${data.fatherIncome || 'N/A'}</p>
        <p><strong>Contact:</strong> ${data.fatherContact}</p>
        <p><strong>Email:</strong> ${data.fatherEmail || 'N/A'}</p>

        <h4>Mother</h4>
        <p><strong>Name:</strong> ${data.motherName}</p>
        <p><strong>Qualification:</strong> ${data.motherQual || 'N/A'}</p>
        <p><strong>Occupation:</strong> ${data.motherOccup || 'N/A'}</p>
        <p><strong>Income:</strong> ${data.motherIncome || 'N/A'}</p>
        <p><strong>Contact:</strong> ${data.motherContact}</p>
        <p><strong>Email:</strong> ${data.motherEmail || 'N/A'}</p>

        <h3>Final Details</h3>
        <p><strong>Residential Address:</strong> ${data.address}</p>
        <p><strong>Primary Contact:</strong> ${data.contactNo}</p>
        <p><strong>Primary Email:</strong> ${data.emailId}</p>
        <p><strong>Declaration Accepted:</strong> ${data.declaration ? 'Yes' : 'No'}</p>
      `;
        } else {
            return res.status(400).json({ message: 'Invalid form type' });
        }

        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address (must be same as auth user for many providers)
            to: receiverEmail,
            subject: subject,
            html: htmlContent,
            replyTo: data.email || data.emailId // Allow replying to the sender
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
}
