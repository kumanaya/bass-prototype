import { z } from "zod";

const transactionSchema = z.object({
  account: z.string(),
  type: z.string(),
  amount: z.number(),
});

export { transactionSchema };
