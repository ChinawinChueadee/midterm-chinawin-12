import z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "please enter username" }),
  password: z.string().min(1, { message: "please enter password" }),
});
