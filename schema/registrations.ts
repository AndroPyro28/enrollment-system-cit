import { z } from "zod";
import { RegistrationFormSchema } from "./base";

export const CreateRegistrationFormSchema = RegistrationFormSchema.extend({
  id: z.string().optional(),
  house_no: z.string(),
  street_name: z.string(),
  brgy: z.string(),
  municipality: z.string(),
  province: z.string(),
  country: z.string(),
  zip_code: z.string(),
  father_contact_info: z.object({
    first_name: z.string(),
    last_name: z.string(),
    middle_name: z.string(),
    contact_no: z.string(),
  }),
  mother_contact_info: z.object({
    first_name: z.string(),
    last_name: z.string(),
    middle_name: z.string(),
    contact_no: z.string(),
  }),
  guardian_contact_info: z.object({
    first_name: z.string(),
    last_name: z.string(),
    middle_name: z.string(),
    contact_no: z.string(),
  })
});

// form types
export type CreateRegistrationFormT = z.infer<typeof CreateRegistrationFormSchema>;
