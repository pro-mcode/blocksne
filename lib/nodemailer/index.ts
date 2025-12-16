import nodemailer from "nodemailer";
import {
  WELCOME_EMAIL_TEMPLATE,
  //   NEWS_SUMMARY_EMAIL_TEMPLATE,
} from "@/lib/nodemailer/templates";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // MUST be false for 587
  auth: {
    user: process.env.NODEMAILER_EMAIL!,
    pass: process.env.NODEMAILER_PASSWORD!,
  },
});

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace("{{name}}", name).replace(
    "{{intro}}",
    intro
  );

  const mailOptions = {
    from: `"BlockSNE" <${process.env.NODEMAILER_EMAIL}>`,
    to: email,
    subject: `Welcome to BlockSNE - your stock market toolkit is ready!`,
    text: "Thanks for joining BlockSNE",
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};

// export const sendNewsSummaryEmail = async ({
//   email,
//   date,
//   newsContent,
// }: {
//   email: string;
//   date: string;
//   newsContent: string;
// }): Promise<void> => {
//   const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE.replace(
//     "{{date}}",
//     date
//   ).replace("{{newsContent}}", newsContent);

//   const mailOptions = {
//     from: `"Signalist News" <signalist@jsmastery.pro>`,
//     to: email,
//     subject: `📈 Market News Summary Today - ${date}`,
//     text: `Today's market news summary from Signalist`,
//     html: htmlTemplate,
//   };

//   await transporter.sendMail(mailOptions);
// };
