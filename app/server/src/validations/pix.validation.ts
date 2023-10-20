import { z } from "zod";

const pixTransferSchema = z.object({
  account: z.string(),
  key: z.string(),
  amount: z.number(),
});

export { pixTransferSchema };
