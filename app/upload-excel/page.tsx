"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  ACCEPTED_EXCEL_EXTENSION,
  FormUploadExcelTeachersSchema,
} from "@/schema/teacher";

type Schema = z.infer<typeof FormUploadExcelTeachersSchema>;

const App = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(FormUploadExcelTeachersSchema),
    defaultValues: {
      file: undefined,
    },
  });

  const onSubmit = async (
    data: z.infer<typeof FormUploadExcelTeachersSchema>
  ) => {
    // Retrieve the first file
    const uploadedFile = data.file;
    console.log("🚀 ~ onSubmit ~ uploadedFile:", uploadedFile);

    // Create FormData object to send both file and form data
    const formData = new FormData();
    formData.append("file", uploadedFile); // Add the file to FormData

    // you can add other form fields here
    // formData.append("name", data.name);
    // formData.append("age", data.age.toString()); // convert to string before appending

    try {
      // Make POST request using Axios
      // const response = await axios.post("/api/teachers", formData, {
      const response = await axios.post("/api/upload-excel", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });
      console.log(response.data); // Handle response data
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  accept={ACCEPTED_EXCEL_EXTENSION.join(", ")}
                  type="file"
                  onChange={(e) => {
                    field.onChange(e.target.files ? e.target.files[0] : null);
                  }}
                />
              </FormControl>
              <FormDescription>excel file</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default App;
