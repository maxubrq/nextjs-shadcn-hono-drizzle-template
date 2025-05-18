import { Hono } from 'hono';

const authRoutes = new Hono();

authRoutes.get('/', (c) => c.text('Hello World'));

export default authRoutes;