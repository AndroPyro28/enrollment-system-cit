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

interface LearnersInformationFormProps {
    form: UseFormReturn<CreateRegistrationFormT>
}

export const LearnersInformationForm:React.FC<LearnersInformationFormProps> = ({form}) => {

  return (
    <div className="flex flex-col gap-y-5">
          <div className="grid grid-rows-1 grid-cols-3 space-y-3 ">
            <div className="flex flex-col">
              <FormField
                control={form.control}
                name={"school_year"}
                key={"school_year"}
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
                key={"grade_level_to_enroll"}
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
                  key={"is_with_lrn"}

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
                  key="is_returnee"
                  render={({ field }) => (
                    <FormItem className="space-y-3 flex items-center">
                      <FormLabel className="mt-3">
                        2. Returning (Balik - aral)
                      </FormLabel>
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
          <Separator />
          <div className="flex flex-col space-y-5">
            <div className="text-center">
              <h1 className="uppercase font-semibold">Learners Information</h1>
            </div>
            <div>
              <h3 className="uppercase">Instruction</h3>
            </div>
            <p className="text-sm">
              Print legibly all information required in CAPITAL LETTERS. Submit
              accomplished form in the Person-in-Charge / Registrar / Class
              Adviser. Use black or Blue pen only.
            </p>

            <div className="flex flex-col">
              <div className="flex justify-evenly space-x-1">
                <div className="flex justify-between items-center space-x-3">
                  <p className="text-sm">
                    PSA Birthday Certificate No. (if available upon
                    registration)
                  </p>
                  <FormField
                    control={form.control}
                    name={"psa_birth_cert_no"}
                    key={"psa_birth_cert_no"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormControl>
                          <Input id="upload" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-between items-center space-x-3">
                  <p className="text-sm">Learner Reference No.</p>
                  <FormField
                    control={form.control}
                    name={"lrn_no"}
                    key={"lrn_no"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormControl>
                          <Input id="upload" className="" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 grid-rows-1 space-x-10 mt-5">
                <div className="flex flex-col space-y-3">
                  <FormField
                    control={form.control}
                    name={"last_name"}
                    key={"last_name"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            id="upload"
                            placeholder="Last Name"
                            className=""
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={"first_name"}
                    key={"first_name"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            id="upload"
                            className=""
                            placeholder="First Name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={"middle_name"}
                    key={"middle_name"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Middle Name</FormLabel>
                        <FormControl>
                          <Input
                            id="upload"
                            className=""
                            placeholder="Middle Name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={"extension"}
                    key={"extension"}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>
                          Extension Name e.g JR, III (if applicable)
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="upload"
                            className=""
                            placeholder="Extension Name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-2 flex flex-col ">
                  <div className="flex space-x-5">
                    <div className="flex flex-col">
                      <FormField
                        control={form.control}
                        name={"dob"}
                        key={"dob"}
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Birthday (mm/dd/yyyy)</FormLabel>
                            <FormControl>
                              <Input id="upload" className="" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex space-x-5">
                        <FormField
                          control={form.control}
                          name="gender"
                          key="gender"
                          render={({ field }) => (
                            <FormItem className="space-y-3 flex ">
                              <FormLabel className="mt-3">Gender</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex space-x-3 items-center ml-5 flex-col space-y-3"
                                >
                                  <FormItem className="flex items-center  space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="male" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      male
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="female" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      female
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={"age"}
                          key={"age"}
                          render={({ field }) => (
                            <FormItem className="mt-2">
                              <FormLabel>Age</FormLabel>
                              <FormControl>
                                <Input
                                  id="upload"
                                  placeholder="Age"
                                  className=""
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-[90%] space-y-3">
                      <FormField
                        control={form.control}
                        name={"place_of_birth"}
                        key={"place_of_birth"}
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Textarea
                                id="upload"
                                placeholder="Place of birth"
                                className="w-full"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={"mother_tongue"}
                        key={"mother_tongue"}
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Textarea
                                id="upload"
                                placeholder="Mother tounge"
                                className="w-full"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-sm">
                      Belonging to any indigenous People (IP)
                      Community/Indigenous Culture community
                    </p>
                    <div className="flex space-x-3 justify-around">
                      <FormField
                        control={form.control}
                        name="is_pc"
                        key="is_pc"
                        render={({ field }) => (
                          <FormItem className="space-y-3 flex items-center">
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
                                  <FormLabel className="font-normal">
                                    Yes
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="false" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    No
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={"ipc_name"}
                        key={"ipc_name"}
                        render={({ field }) => (
                          <FormItem className="mt-2 flex items-center">
                            <FormLabel>if yes please specify</FormLabel>
                            <FormControl>
                              <Input id="upload" className="" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="">
                      <FormField
                        control={form.control}
                        name={"household_id_4ps"}
                        key={"household_id_4ps"}
                        render={({ field }) => (
                          <FormItem className="mt-2 flex items-center">
                            <FormLabel className="flex flex-col w-full space-y-1">
                              <div>Is your family beneficiary of 4 Ps?</div>
                              <span>
                                if yes, write the 4 Ps household ID number
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Input id="upload" className="w-full" />
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
            {/* end */}
          </div>

          <Separator />
          <div className="flex flex-col space-y-5">
            <div >
            <FormField
                  control={form.control}
                  // temporary name
                  name="is_4ps"
                  render={({ field }) => (
                    <FormItem className="space-y-3 flex items-center">
                      <FormLabel className="mt-3">is the child a learner with disability? </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
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
            <p>
              if yes, specify the type of disability
            </p>
            <FormField
              control={form.control}
              name="semester"
              render={({ field }) => {
                const items = [
                  {
                    label: 'visual impairment',
                    value: 'visual_impairment'
                  },
                  {
                    label: 'hearing impairment',
                    value: 'hearing_impairment'
                  },
                  {
                    label: 'learning disability',
                    value: 'learning_disability'
                  },
                  {
                    label: 'intellectual disability',
                    value: 'intellectual_disability'
                  },
                  {
                    label: 'autism spectrum disorder',
                    value: 'autism_spectrum_disorder'
                  },

                  {
                    label: 'emotional behavioral disorder',
                    value: 'emotional_behavioral_disorder'
                  },

                  {
                    label: 'orthopedic/physical disability',
                    value: 'orthopedic/physical_disability'
                  },
                  {
                    label: 'multiple disorder',
                    value: 'multiple_disorder'
                  },
                  {
                    label: 'speech/language disorder',
                    value: 'speech/language_disorder'
                  },
                  {
                    label: 'cerebral palsy',
                    value: 'cerebral_palsy'
                  },
                  {
                    label: 'special health problem / chronic disease',
                    value: 'cerebral_palsy'
                  },
                ]
               return <FormItem className="space-y-3 flex items-center">
                  {/* <FormLabel className="mt-3">Semester</FormLabel> */}
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-4 grid-rows-3"
                    >
                      {
                        items.map(item => (
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={item.value} />
                        </FormControl>
                        <FormLabel className="font-normal capitalize">{item.label}</FormLabel>
                      </FormItem>
                        ))
                      }
                      
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              }}
            />
          </div>
          </div>
  )
}