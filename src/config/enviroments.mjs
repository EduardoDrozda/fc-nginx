import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envVarsSchema = z.object({
  APP_PORT: z.coerce.number().default(3000),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string(),
});

const _env = envVarsSchema.safeParse(process.env);

if (!_env.success) {
  console.error('⚠️ Invalid environment variables', _env.error.format())
  process.exit(1)
}



export default _env.data;
