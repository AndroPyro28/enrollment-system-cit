"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "@/components/ui/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const EnrollmentClients = () => {
  const form = useForm<any>({
    // resolver: zodResolver(formCalendarSchema),
    defaultValues: {},
    mode: "all",
  });

  const onSubmit: SubmitHandler<any> = async (values) => {};

  const isLoading = form.formState.isSubmitting;

  const years: number[] = Array.from(
    { length: 2025 - 1990 },
    (_, index) => 1990 + index
  );

  const getDaysInMonth = (year: number, month: number): number[] => {
    const daysInMonth: number[] = [];
    const lastDayOfMonth: number = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= lastDayOfMonth; day++) {
      daysInMonth.push(day);
    }

    return daysInMonth;
  };

  form.watch(["year", "month"]);

  const days: number[] = getDaysInMonth(
    Number(form.getValues("year")),
    Number(form.getValues("month"))
  );

  const months = [
    { label: "January", value: 0 },
    { label: "February", value: 1 },
    { label: "March", value: 2 },
    { label: "April", value: 3 },
    { label: "May", value: 4 },
    { label: "June", value: 5 },
    { label: "July", value: 6 },
    { label: "August", value: 7 },
    { label: "September", value: 8 },
    { label: "October", value: 9 },
    { label: "November", value: 10 },
    { label: "December", value: 11 },
  ];

  return (
    <div className="flex flex-col justify-center w-full items-center py-10">
      <div className="flex flex-col w-full lg:w-[60%] justify-center items-center">
        <div className="w-full bg-zinc-100 mx-auto px-5 py-3 text-center rounded-md mb-10">
          <h1 className="text-2xl font-light text-zinc-500">Enrollment Form</h1>
        </div>

        <Form {...form}>
          <form className="w-full flex flex-col gap-y-10">
            <section className="flex flex-col">
              <h2 className="text-lg font-light text-zinc-500 mb-5">
                {" "}
                Student's Name{" "}
              </h2>
              <div className="flex justify-evenly gap-x-3">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        middlename
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="focus-visible:ring-0 focus-visible:ring-offset-0 p-5 placeholder:text-md"
                            type="text"
                            placeholder={`Firstname`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="middlename"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        middlename
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="focus-visible:ring-0 focus-visible:ring-offset-0 p-5 placeholder:text-md"
                            type="text"
                            placeholder={`Middlename`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        lastname
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="focus-visible:ring-0 focus-visible:ring-offset-0 p-5 placeholder:text-md"
                            type="text"
                            placeholder={`Lastname`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </section>

            <section className="flex flex-col">
              <h2 className="text-lg font-light text-zinc-500 mb-5">
                {" "}
                Student's Date of Birth{" "}
              </h2>
              <div className="flex justify-evenly gap-x-3">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Year</FormLabel> */}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {years
                              .slice(0)
                              .reverse()
                              .map((year) => (
                                <SelectItem value={year.toString()}>
                                  {year}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="month"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Month</FormLabel> */}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Month" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {months.map((month) => (
                              <SelectItem value={month.value.toString()}>
                                {month.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="day"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Day</FormLabel> */}
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Day" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {days.map((day) => (
                              <SelectItem value={day.toString()}>
                                {day}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </section>

            <section className="flex flex-col">
              <h2 className="text-lg font-light text-zinc-500 mb-5">
                {" "}
                Student's Contact
              </h2>
              <div className="flex flex-col gap-y-5">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        middlename
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="focus-visible:ring-0 focus-visible:ring-offset-0 p-5 placeholder:text-md"
                            type="text"
                            placeholder={`Email`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        middlename
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="focus-visible:ring-0 focus-visible:ring-offset-0 p-5 placeholder:text-md"
                            type="number"
                            placeholder={`Contact No.`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </section>

            <section className="flex flex-col">
              <h2 className="text-lg font-light text-zinc-500 mb-5">
                {" "}
                Student's Address
              </h2>
              <div className="flex flex-col gap-y-5">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        middlename
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="focus-visible:ring-0 focus-visible:ring-offset-0 p-5 placeholder:text-md"
                            type="text"
                            placeholder={`Province`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="municipality"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        middlename
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="focus-visible:ring-0 focus-visible:ring-offset-0 p-5 placeholder:text-md"
                            type="text"
                            placeholder={`Municipality`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        middlename
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="focus-visible:ring-0 focus-visible:ring-offset-0 p-5 placeholder:text-md"
                            type="text"
                            placeholder={`Street`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="barangay"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        {/* <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        middlename
                      </FormLabel> */}
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="focus-visible:ring-0 focus-visible:ring-offset-0 p-5 placeholder:text-md"
                            type="text"
                            placeholder={`Barangay`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </section>

            <Button
              variant={"default"}
              type="submit"
              className=" dark:text-white"
              disabled={isLoading}
            >
              {(() => {
                if (isLoading)
                  return (
                    <div className="flex items-center gap-x-3">
                      {" "}
                      Submitting <Loader2 size={20} />
                    </div>
                  );
                return "Submit";
              })()}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EnrollmentClients;
