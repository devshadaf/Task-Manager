import {z} from "zod"

const envSchema = z.object({
  PORT: z.coerce.number().min(1).max(65536).default(5555),
  MONGODB_URL:z.string().min(1)
});

export const env=envSchema.parse(process.env)

