import { z } from "zod";
import { RegistrationFormSchema } from "./base";

export const CreateRegistrationFormSchema = RegistrationFormSchema.extend({
  id: z.string().optional(),
});

// form types
export type CreateRegistrationFormT = z.infer<typeof RegistrationFormSchema>;
