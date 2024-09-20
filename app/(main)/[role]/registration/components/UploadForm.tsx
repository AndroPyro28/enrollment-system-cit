"use client";
import React from 'react'
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import UploadItem from './UploadItem';

interface UploadFormProps {
    form: UseFormReturn<CreateRegistrationFormT>
}

export const UploadForm:React.FC<UploadFormProps> = ({form}) => {

    const uploads = [
        { name: "form137", label: "FORM137 (if applicable)" },
        { name: "birthCertificate", label: "BIRTH CERTIFICATE" },
        { name: "card", label: "CARD" },
        { name: "applicationForm", label: "APPLICATION FORM" },
        { name: "picture1x1", label: "1X1 PICTURE" },
      ];

  return (
    <div
          className="flex flex-col gap-y-5 px-10 "
          >
          <h1 className="font-bold text-3xl">Upload Documents</h1>

          <div className="flex flex-col gap-y-5 px-5 mt-10">
            {uploads.map((item, index) => {
              return (
                <UploadItem
                  form={form}
                  name={item.name}
                  key={index}
                  label={item.label}
                />
              );
            })}
          </div>
          </div>
  )
}

export default UploadForm