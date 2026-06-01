"use server";

import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

export async function sendDemoRequestEmail(formData: FormData) {
  try {
    const studentName = formData.get("Student Name") as string;
    const studentClass = formData.get("Class") as string;
    const subject = formData.get("Subject") as string;
    const phone = formData.get("Parent Phone / WhatsApp") as string;
    const country = formData.get("Country") as string;
    const time = formData.get("Preferred Time") as string;

    // 1. Configure the OAuth2 Client
    const oauth2Client = new OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    // 2. Generate a fresh Access Token
    const accessTokenRes = await oauth2Client.getAccessToken();
    const accessToken = accessTokenRes?.token;

    if (!accessToken) {
      throw new Error("Failed to generate OAuth access token.");
    }

    // 3. Create the Nodemailer SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.SENDER_EMAIL_ADDRESS,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00E5FF; background: #050B1B; padding: 15px; border-radius: 8px; text-align: center;">New Demo Class Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <tr style="background-color: #050B1B; color: white;">
            <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Field</th>
            <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Details</th>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Student Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${studentName}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Class</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${studentClass}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${subject}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Parent Phone / WhatsApp</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Country</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${country}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Time</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${time}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;">
          This email was generated from the Neo Home Demo Form.
        </p>
      </div>
    `;

    // 4. Send the Email
    await transporter.sendMail({
      from: `"Neo Home Demo" <${process.env.SENDER_EMAIL_ADDRESS}>`,
      to: "sumesh2395@gmail.com",
      subject: "New Demo Class Request - Neo Home",
      html: htmlTemplate,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
