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
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export const TransfereesReturneesForm = () => {
  const form = useForm<CreateRegistrationFormT>({
    resolver: zodResolver(CreateRegistrationFormSchema),
    defaultValues: {},
    mode: "all",
  });
  const onSubmit: SubmitHandler<any> = (values) => {};

  return (
    <div className="w-full h-full rounded-sm border-black-2 px-5 py-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5 px-10 py-10 border-zinc-800 border  rounded-xl"
        >
          <div className="flex flex-col space-y-5">
            <div className="py-5 px-3 border-zinc-800 border rounded-md flex space-x-10 justify-center">
              <h2>For Returnees and Transferees Students</h2>
            </div>
            <div className="grid grid-rows-2 space-y-3 ">
              <div className="grid grid-cols-2 space-x-3">
                <div>
                  <FormField
                    control={form.control}
                    name={"last_grade_level_complete"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Last Grade Level Complete</FormLabel>
                        <FormControl>
                          <Input
                            id="upload"
                            placeholder="Last Grade Level Complete"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name={"last_school_year_complete"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Last School Year Complete</FormLabel>
                        <FormControl>
                          <Input
                            id="upload"
                            placeholder="Last School Year Complete"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 space-x-3">
                <div>
                  <FormField
                    control={form.control}
                    name={"last_school_attended"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Last School Attended</FormLabel>
                        <FormControl>
                          <Input
                            id="upload"
                            placeholder="Last School Attended"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name={"school_id"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>School ID</FormLabel>
                        <FormControl>
                          <Input id="upload" placeholder="School ID" />
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
            <div className="py-5 px-3 border-zinc-800 border rounded-md flex space-x-10 justify-center">
              <h2>For Learners in Senior High</h2>
            </div>
            <div className="grid grid-rows-1 space-y-3 ">
              <div className="grid grid-cols-2 space-x-3">
                <FormField
                  control={form.control}
                  name="semester"
                  render={({ field }) => (
                    <FormItem className="space-y-3 flex items-center">
                      <FormLabel className="mt-3">Semester</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-3 ml-5"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="first" />
                            </FormControl>
                            <FormLabel className="font-normal">1st</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="second" />
                            </FormControl>
                            <FormLabel className="font-normal">2nd</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col items-center w-full">
                  <FormField
                    control={form.control}
                    name={"street_name"}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Track</FormLabel>
                        <FormControl>
                          <Input id="upload" placeholder="Track" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={"street_name"}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Strand</FormLabel>
                        <FormControl>
                          <Input id="upload" placeholder="Strand" />
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
            <p className="text-sm">
              If the school will implement other distance learning modalities
              aside from face to face instruction, what would you prefer for
              your child?
            </p>

            <FormField
              control={form.control}
              name="preferred_learning_modalities"
              render={() => {
                const items = [
                  {
                    id: "Modular_Print",
                    label: "Modular (Print)",
                  },
                  {
                    id: "online",
                    label: "Online",
                  },
                  {
                    id: "radio_based_instruction",
                    label: "Radio Based Instruction",
                  },
                  {
                    id: "blended",
                    label: "Blended",
                  },
                  {
                    id: "modular_online",
                    label: "Modular (Online)",
                  },
                  {
                    id: "education_television",
                    label: "Education Television",
                  },
                  {
                    id: "home_schooling",
                    label: "Homeschooling",
                  },
                  
                ] as const;

                return (
                  <FormItem className="">
                    <div className="mb-4">
                      <FormLabel className="text-sm">Choose all that applies</FormLabel>
                    </div>
                    <div className="grid grid-cols-4 grid-rows-2 space-y-3 items-center">
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="preferred_learning_modalities"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value ?? [],
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <Button className="w-fit self-end">Next</Button>
        </form>
      </Form>
    </div>
  );
};