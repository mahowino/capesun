// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, 
      subject: `Contact Form Submission: ${subject}`,
      text: `Message from: ${email}\n\n${message}`,
    });

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 'error', message: 'Failed to send email' }, { status: 500 });
  }
}
