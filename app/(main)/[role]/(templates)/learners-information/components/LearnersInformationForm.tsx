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

export const LearnersInformationForm = () => {
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
            <div className="grid grid-rows-1 grid-cols-3 space-y-3 ">
                <div className="flex flex-col">
                  <FormField
                    control={form.control}
                    name={"school_year"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>School Year</FormLabel>
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

                <FormField
                    control={form.control}
                    name={"grade_level_to_enroll"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Grade Level</FormLabel>
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

                <div className="flex flex-col col-span-2 ml-10 justify-around">
                <p>Check the appropriate box only.</p>

                <div className="flex justify-between">
                <FormField
                  control={form.control}
                  name="is_with_lrn"
                  render={({ field }) => (
                    <FormItem className="space-y-3 flex items-center">
                      <FormLabel className="mt-3">1. With LRN?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={"false"}
                          className="flex space-x-3 ml-5"
                          >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Yes</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />

<FormField
                  control={form.control}
                  name="is_returnee"
                  render={({ field }) => (
                    <FormItem className="space-y-3 flex items-center">
                      <FormLabel className="mt-3">2. Returning (Balik - aral)</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={"false"}
                          className="flex space-x-3 ml-5"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Yes</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                  </div>
                </div>
            </div>

          <div className="flex flex-col space-y-5">
            <h3 className="uppercase">Instruction</h3>
            <p className="text-sm">
                Print legibly all information required in CAPITAL LETTERS. Submit accomplished form in the Person-in-Charge / Registrar / Class Adviser. Use black or Blue pen only.
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
