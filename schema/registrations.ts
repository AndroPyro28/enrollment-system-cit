import { z } from "zod";
import { LearningModalitySchema, RegistrationFormSchema } from "./base";

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
  }),
  preferred_learning_modalities: z.array(z.string())
})
.extend({
  is_with_lrn: z.enum(['true', 'false']),
  is_returnee: z.enum(['true', 'false'])
})

// form types
export type CreateRegistrationFormT = z.infer<typeof CreateRegistrationFormSchema>;
