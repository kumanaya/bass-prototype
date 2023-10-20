import { z } from "zod";

const validCategories = z.enum(["CONTA_CORRENTE", "CONTA_POUPANCA"]);

const accountSchema = z.object({
  user: z.string(),
  category: validCategories,
});

export { accountSchema };
