import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import peopleRoutes from './routes/people.routes.js';
import publicationsRoutes from './routes/publications.routes.js';
import blogsRoutes from './routes/blogs.routes.js';
import galleryRoutes from './routes/gallery.routes.js';
import contactRoutes from './routes/contact.routes.js';
import newsRoutes from './routes/news.routes.js';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));

const limiter = rateLimit({ windowMs: 60 * 1000, max: 60 });
app.use(limiter);

app.get('/healthz', (req, res) => res.json({ ok: true }));

app.use('/api/people', peopleRoutes);
app.use('/api/publications', publicationsRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/news', newsRoutes);

export default app;
