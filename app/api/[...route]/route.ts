import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import authRoutes from './routes/auth';

const app = new Hono();

app.get('/api', c => c.text('Hello World'));

app.route('/api/auth', authRoutes);
// Add more routes here

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
