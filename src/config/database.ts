import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false  
  }
});

pool.connect()
  .then(() => console.log("✅ Conectado a PostgreSQL correctamente"))
  .catch((err) => console.error("❌ Error conectando a PostgreSQL:", err));

export default pool;