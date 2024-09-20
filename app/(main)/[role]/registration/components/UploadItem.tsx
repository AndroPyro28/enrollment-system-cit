import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Download, UploadIcon } from "lucide-react";
import { Input } from '@/components/ui/input';

interface UploadItemProps {
    label: string;
    name: string;
    form:any
}
const UploadItem:React.FC<UploadItemProps> = ({ label, name, form}) => {
  return (
    <div className="flex gap-x-3">
            <div className="">
              <FormField
                control={form.control}
                name={name}
                key={name}
                render={({ field }) => (
                  <FormItem className="">
                    <label
                      htmlFor="upload"
                      className=" hover:bg-zinc-200  px-5 transition-all m-auto cursor-pointer py-3 border-zinc-300 border-2 rounded-lg flex flex-col justify-center items-center gap-5 "
                    >
                      <UploadIcon className=" text-gray-400 ml-2 h-4 w-4 " />
                      <span className="text-[#42579E] text-sm font-semibold">
                        {label}
                      </span>
                      <span className="text-xs text-zinc-500 font-semibold">
                        *.docs, docx, png, jpeg, pdf
                      </span>
                    </label>
                    <FormControl>
                      <Input
                        className="hidden"
                        id="upload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e?.target?.files?.[0]) {
                            const reader = new FileReader();
                            reader.readAsDataURL(e?.target?.files?.[0]);

                            reader.onloadend = () => {
                              field.onChange(reader.result);
                            };
                          } else {
                            field.onChange("");
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

  )
}

export default UploadItem