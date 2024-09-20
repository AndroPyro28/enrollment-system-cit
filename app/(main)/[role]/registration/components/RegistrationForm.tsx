"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  CreateRegistrationFormSchema,
  CreateRegistrationFormT,
} from "@/schema/registrations";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { PersonalInformationForm } from "./PersonalInformationForm";
import { LearnersInformationForm } from "./LearnersInformationForm";
import { TransfereesReturneesForm } from "./TransfereesReturnessForm";
import { cn } from "@/lib/utils";
import UploadForm from "./UploadForm";

export const RegistrationForm = () => {
  const form = useForm<CreateRegistrationFormT>({
    resolver: zodResolver(CreateRegistrationFormSchema),
    defaultValues: {},
    mode: "all",
  });
  const onSubmit: SubmitHandler<any> = (values) => {};

  const [formPage, setFormPage] = useState(0)

  const forms = [
    <LearnersInformationForm form={form}/>,
    <PersonalInformationForm form={form} />,
    <TransfereesReturneesForm form={form}/>,
    <UploadForm form={form} />
  ]

  return (
    <div className="w-full h-full rounded-sm border-black-2 px-5 py-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5 px-10 py-10 border-zinc-800 border  rounded-xl"
        >
          {
            forms[formPage]
          }
            {/* <PersonalInformationForm form={form} />
            <LearnersInformationForm form={form}/>
            <TransfereesReturneesForm form={form}/> */}
            
            <div className={cn("flex justify-between", formPage === 0 && "justify-end")}>
            {
              formPage !== 0 &&
              <Button className="w-fit self-end" type="button" onClick={() => setFormPage(prev => prev - 1)}>Prev</Button>
            }

            {
              (formPage < forms.length -1) &&
              <Button className="w-fit self-end" type="button" onClick={() => setFormPage(prev => prev + 1)}>Next</Button>
            }

            {
              (formPage === forms.length -1) &&
              <Button className="w-fit self-end" type="submit">Submit</Button>
            }
            </div>

        </form>
      </Form>
    </div>
  );
};
