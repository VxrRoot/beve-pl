"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { DM_Mono } from "next/font/google";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarIcon,
  ChevronDown,
} from "lucide-react";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const FormSchema = z.object({
  serviceType: z.enum(["mycie cykliczne", "mycie jednorazowe"], {
    required_error: "To pole jest wymagane",
  }),
  boxes: z.enum(["posiadam skrzynki", "nie posiadam skrzynek"], {
    required_error: "To pole jest wymagane",
  }),
  cupAmount: z
    .string({ required_error: "To pole jest wymagane" })
    .min(1, { message: "To pole jest wymagane" }),
  boxesAmount: z.string().optional(),
  cupProducer: z.string().optional(),
  sendDate: z.date({ required_error: "Data jest wymagana" }),
  pickupDate: z.date({ required_error: "Data jest wymagana" }),
});

const WashingForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      serviceType: "mycie cykliczne",
      boxes: "posiadam skrzynki",
      cupAmount: "",
      boxesAmount: "",
      cupProducer: "",
      // pickupDate: new Date(),
      // sendDate: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:border-[#E5E5E5] lg:border-r lg:pr-10">
            <h1 className="text-2xl tracking-[-0.5px] mb-6">
              1. Konfiguracja mycia kubków
            </h1>
            <div>
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-[1rem] font-bold">
                      Rodzaj usługi
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="mycie cykliczne" />
                          </FormControl>
                          <FormLabel className="font-normal text-[1rem]">
                            Mycie cykliczne
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="mycie jednorazowe" />
                          </FormControl>
                          <FormLabel className="font-normal text-[1rem]">
                            Mycie jednorazowe
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
                name="boxes"
                render={({ field }) => (
                  <FormItem className="space-y-3 mt-6">
                    <FormLabel className="text-[1rem] font-bold">
                      Skrzynki:{" "}
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="posiadam skrzynki" />
                          </FormControl>
                          <FormLabel className="font-normal text-[1rem]">
                            Posiadam skrzynki
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="nie posiadam skrzynek" />
                          </FormControl>
                          <FormLabel className="font-normal text-[1rem]">
                            Nie posiadam skrzynek
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-6 flex flex-col gap-4 md:flex-row">
                <FormField
                  control={form.control}
                  name="cupAmount"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-[1rem] font-bold">
                        Ilość kubków:
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="np. 5000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="boxesAmount"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-[1rem] font-bold">
                        Ilość skrzynek:
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="np. 50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-6 flex flex-col gap-4 md:flex-row">
                <FormField
                  control={form.control}
                  name="sendDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel className="text-[1rem] font-bold">
                        Data:
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "yyyy-MM-dd")
                              ) : (
                                <span>Data przesłania</span>
                              )}
                              <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pickupDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full md:mt-[2rem]">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "yyyy-MM-dd")
                              ) : (
                                <span>Data odbioru</span>
                              )}
                              <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-6">
                <FormField
                  control={form.control}
                  name="cupProducer"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-[1rem] font-bold">
                        Producent kubków (opcjonalnie)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nazwa producenta" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 lg:pl-10 ">
            <Button
              className={`uppercase w-full text-base py-3 hover:bg-primaryGreen tracking-[0.84px] bg-secondaryGreen ${mono.className}`}
              type="submit"
            >
              WYŚLIJ ABY OTRZYMAĆ OFERTĘ <ArrowUpRight className="ml-2 " />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default WashingForm;
