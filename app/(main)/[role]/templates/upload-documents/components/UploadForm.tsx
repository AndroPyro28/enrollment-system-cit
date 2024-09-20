"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Form,
} from "@/components/ui/form";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { TUploadSchema, UploadSchema } from "@/schema/upload";
import UploadItem from "./UploadItem";

const Upload = () => {
  const form = useForm<TUploadSchema>({
    resolver: zodResolver(UploadSchema),
    defaultValues: {
    },
    mode: "all",
  });
  const onSubmit: SubmitHandler<TUploadSchema> = (values) => {};

  const uploads = [
    { name: "form137", label: "FORM137 (if applicable)" },
    { name: "birthCertificate", label: "BIRTH CERTIFICATE" },
    { name: "card", label: "CARD" },
    { name: "applicationForm", label: "APPLICATION FORM" },
    { name: "picture1x1", label: "1X1 PICTURE" },
  ];

  return (
    <div className="w-full h-full rounded-sm border-black-2 px-5 py-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5 px-10 "
        >
          
          <Button className="w-fit self-end">Done</Button>
        </form>
      </Form>
    </div>
  );
};

export default Upload;
