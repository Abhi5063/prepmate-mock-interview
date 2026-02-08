import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"

const url = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;

let db;

if (!url || typeof url !== 'string' || !url.trim().startsWith('postgres')) {
    console.warn("Missing or invalid DB URL, using mock DB.");
    db = {
        select: () => ({ from: () => ({ where: () => [], orderBy: () => [] }) }),
        insert: () => ({ values: () => ({ returning: () => [] }) }),
    };
} else {
    try {
        const sql = neon(url.trim());
        db = drizzle(sql, { schema });
    } catch (error) {
        console.warn("Failed to initialize DB connection, using mock:", error);
        db = {
            select: () => ({ from: () => ({ where: () => [], orderBy: () => [] }) }),
            insert: () => ({ values: () => ({ returning: () => [] }) }),
        };
    }
}

export { db };