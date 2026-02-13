import { Hono } from "hono";
import { Env } from './core-utils';

export function userRoutes(app: Hono<{ Bindings: Env }>) {
    // Add more routes like this. **DO NOT MODIFY CORS OR OVERRIDE ERROR HANDLERS**
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));

    app.post('/api/contact', async (c) => {
        try {
            const body = await c.req.json();
            const { name, email, message } = body;

            if (!name || !email || !message) {
                return c.json({ success: false, error: 'Missing required fields' }, 400);
            }

            // Log inquiry for persistence simulation
            console.log(`[INQUIRY] From: ${name} (${email}) | Message: ${message.substring(0, 100)}...`);

            // In a real scenario, this would trigger an email or database insert
            return c.json({ success: true, message: 'Inquiry received' });
        } catch (error) {
            console.error('[API ERROR] Contact form submission failed:', error);
            return c.json({ success: false, error: 'Internal server error' }, 500);
        }
    });
}
