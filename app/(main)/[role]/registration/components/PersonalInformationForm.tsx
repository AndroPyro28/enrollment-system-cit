"use client";
import React from "react";
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

interface PersonalInformationFormProps {
  form: UseFormReturn<CreateRegistrationFormT>;
}

export const PersonalInformationForm: React.FC<
  PersonalInformationFormProps
> = ({ form }) => {
  return (
    <div className="flex flex-col gap-y-5  ">
      <div className="flex flex-col space-y-5">
        <div className="py-5 px-3 border-zinc-800 border rounded-md flex space-x-10">
          <h2>Current Address</h2>
        </div>
        <div className="grid grid-rows-2 space-y-3 ">
          <div className="grid grid-cols-3 space-x-3">
            <div>
              <FormField
                control={form.control}
                name={"house_no"}
                key={"house_no"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="House No." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name={"street_name"}
                key={"street_name"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Street name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name={"brgy"}
                key={"brgy"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="barangay" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 space-x-3">
            <div>
              <FormField
                control={form.control}
                name={"municipality"}
                key={"municipality"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Municipality" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name={"province"}
                key={"province"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Province" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-evenly space-x-3">
              <FormField
                control={form.control}
                name={"country"}
                key={"country"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Country" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"zip_code"}
                key={"zip_code"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Zip" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <div className="py-5 px-3 border-zinc-800 border rounded-md flex space-x-10">
          <h2>Permanent Address</h2>

          <div className="flex text-sm">
            <label htmlFor="">Same with your address?</label>

            <div className="flex space-x-3">
              <input type="radio" />
              <input type="radio" />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 space-y-3 ">
          <div className="grid grid-cols-3 space-x-3">
            <div>
              <FormField
                control={form.control}
                name={"house_no"}
                key={"house_no"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="House No." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name={"street_name"}
                key={"street_name"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Street name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name={"brgy"}
                key={"brgy"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="barangay" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 space-x-3">
            <div>
              <FormField
                control={form.control}
                name={"municipality"}
                key={"municipality"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Municipality" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name={"province"}
                key={"province"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Province" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-evenly space-x-3">
              <FormField
                control={form.control}
                name={"country"}
                key={"country"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Country" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"zip_code"}
                key={"zip_code"}
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input id="upload" placeholder="Zip" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <div className="py-5 px-3 border-zinc-800 border rounded-md flex space-x-10">
          <h2>Parents / Guardian Information</h2>
        </div>

        <div className="grid grid-rows-3 space-y-3 ">
          <div className="flex flex-col space-y-3">
            <label htmlFor="">Father's Name</label>
            <div className="grid grid-cols-4 space-x-3">
              <div>
                <FormField
                  control={form.control}
                  name={"father_contact_info.last_name"}
                  key={"father_contact_info.last_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="Last Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"father_contact_info.first_name"}
                  key={"father_contact_info.first_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="First Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"father_contact_info.middle_name"}
                  key={"father_contact_info.middle_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="Middle Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"father_contact_info.contact_no"}
                  key={"father_contact_info.contact_no"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="Contact No." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="">Mother's Name</label>
            <div className="grid grid-cols-4 space-x-3">
              <div>
                <FormField
                  control={form.control}
                  name={"mother_contact_info.last_name"}
                  key={"mother_contact_info.last_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="Last Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"mother_contact_info.first_name"}
                  key={"mother_contact_info.first_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="First Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"mother_contact_info.middle_name"}
                  key={"mother_contact_info.middle_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="Middle Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"mother_contact_info.contact_no"}
                  key={"mother_contact_info.contact_no"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="Contact No." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="">Guardian's Name</label>
            <div className="grid grid-cols-4 space-x-3">
              <div>
                <FormField
                  control={form.control}
                  name={"guardian_contact_info.last_name"}
                  key={"guardian_contact_info.last_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="Last Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"guardian_contact_info.first_name"}
                  key={"guardian_contact_info.first_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="First Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"guardian_contact_info.middle_name"}
                  key={"guardian_contact_info.middle_name"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="Middle Name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name={"guardian_contact_info.contact_no"}
                  key={"guardian_contact_info.contact_no"}
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input id="upload" placeholder="Contact No." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
