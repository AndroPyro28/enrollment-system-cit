import { z } from "zod";
import { GuardianSchema, LearningModalitySchema, RegistrationFormSchema } from "./base";
import { UploadSchema } from "./upload";

export const CreateRegistrationFormSchema = RegistrationFormSchema.extend({
  id: z.string().optional(),
  house_no: z.string(),
  street_name: z.string(),
  brgy: z.string(),
  municipality: z.string(),
  province: z.string(),
  country: z.string(),
  zip_code: z.string(),
  father_contact_info: GuardianSchema.pick({
    contact_no:true,
    last_name:true,
    middle_name:true,
    first_name:true,
  }),
  mother_contact_info: GuardianSchema.pick({
    contact_no:true,
    last_name:true,
    middle_name:true,
    first_name:true,
  }),
  guardian_contact_info: GuardianSchema.pick({
    contact_no:true,
    last_name:true,
    middle_name:true,
    first_name:true,
  }),
  preferred_learning_modalities: z.array(z.string()),
  uploads: UploadSchema
})
.extend({
  is_with_lrn: z.enum(['true', 'false']),
  is_returnee: z.enum(['true', 'false']),
  is_4ps: z.enum(['true', 'false']),
  is_pc: z.enum(['true', 'false']),

})

// form types
export type CreateRegistrationFormT = z.infer<typeof CreateRegistrationFormSchema>;
