import supabaseAdmin from '../config/supabaseAdmin.js';
import nodemailer from 'nodemailer';

export const postContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

    // Save to DB (optional)
    const { error: insertErr } = await supabaseAdmin.from('contacts').insert([{ name, email, message }]);
    if (insertErr) console.error('contacts insert error', insertErr);

    // Send email (SMTP configured via .env)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    await transporter.sendMail({
      from: `"NGCN Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `NGCN Contact: ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to handle contact' });
  }
};
