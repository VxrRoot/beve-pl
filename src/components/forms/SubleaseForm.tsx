"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { links } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Loader, Send } from "lucide-react";
import { DM_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-like-checkbox-group";
import { Textarea } from "../ui/textarea";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

export enum LoadingStatus {
  NOT_LOADING = "not loading",
  PENDING = "pending",
  SEND = "send",
}

const optionalShipmentFields = [
  "shipmentCountry",
  "shipmentPostCode",
  "shipmentCity",
  "shipmentStreet",
  "shipmentBuildingNumber",
  "shipmentFlatNumber",
];

export const FormWashingSchema = z
  .object({
    hasBoxes: z.enum(["tak", "nie"], {
      required_error: "To pole jest wymagane",
    }),
    cupProducer: z
      .string({
        required_error: "To pole jest wymagane",
      })
      .min(1, { message: "To pole jest wymagane" }),
    cupAmount: z
      .string({ required_error: "To pole jest wymagane" })
      .regex(/^\d*$/, "To pole musi być numerem")
      .min(1, { message: "To pole jest wymagane" }),
    boxesAmount: z
      .string({ required_error: "To pole jest wymagane" })
      .min(1, { message: "To pole jest wymagane" }),
    nip: z
      .string({ required_error: "Numer NIP jest wymagany" })
      .min(9, { message: "Wpisz poprawny numer NIP" }),
    companyName: z
      .string({ required_error: "Nazwa firmy jest wymagana" })
      .min(2, "Wpisz poprawną nazwę firmy"),
    country: z
      .string({ required_error: "Miasto jest wymagane" })
      .min(2, { message: "Wpisz poprawną nazwę kraju" }),
    postCode: z
      .string({ required_error: "Kod pocztowy jest wymagany" })
      .min(2, { message: "Wpisz poprawny kod pocztowy" }),
    city: z
      .string({ required_error: "Miasto jest wymagane" })
      .min(2, { message: "Wpisz poprawną nazwę" }),
    street: z
      .string({ required_error: "Ulica jest wymagana" })
      .min(2, { message: "Wpisz poprawną nazwę" }),
    buildingNumber: z
      .string({ required_error: "Numer budynku jest wymagany" })
      .min(2, { message: "Wpisz poprawną nazwę" }),
    flatNumber: z.string().optional(),
    differentShipmentData: z.boolean().default(false).optional(),
    nameAndSurname: z.string().min(2, "Wpisz imię i nazwisko"),
    email: z
      .string({ required_error: "Wpisz adres email" })
      .email({ message: "Wpisz poprawny adres email" }),
    phone: z
      .string({ required_error: "Wpisz numer telefonu" })
      .min(9, { message: "Wpisz poprawny numer telefonu" }),
    message: z.string().optional(),
    termsConsent: z
      .boolean({ required_error: "Zgoda jest wymagana" })
      .default(false)
      .refine((val) => val === true, {
        message: "Musisz zaakceptować politykę prywatności",
      }),
    //     Optional
    shipmentCountry: z.string().optional(),
    shipmentPostCode: z.string().optional(),
    shipmentCity: z.string().optional(),
    shipmentStreet: z.string().optional(),
    shipmentBuildingNumber: z.string().optional(),
    shipmentFlatNumber: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.differentShipmentData === true) {
      if (!data.shipmentCountry) {
        optionalShipmentFields.map((item) => {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Pole jest wymagane",
            path: [item],
          });
        });
      }
    }
  });

export type FormSchemaType = z.infer<typeof FormWashingSchema>;

const SubleaseForm = () => {
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.NOT_LOADING);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormWashingSchema),
    defaultValues: {
      cupProducer: "",
      cupAmount: "",
      boxesAmount: "",
      hasBoxes: "tak",
      flatNumber: "",
      nip: "",
      companyName: "",
      buildingNumber: "",
      city: "",
      country: "",
      street: "",
      postCode: "",
      nameAndSurname: "",
      email: "",
      phone: "",
      message: "",
      shipmentCountry: "",
      shipmentPostCode: "",
      shipmentCity: "",
      shipmentStreet: "",
      shipmentBuildingNumber: "",
      shipmentFlatNumber: "",
    },
  });

  const differentShipment = form.watch("differentShipmentData");

  async function onSubmit(values: z.infer<typeof FormWashingSchema>) {
    setLoadingStatus(LoadingStatus.PENDING);

    let message = {};

    if (!values.differentShipmentData) {
      message = {
        contactType: "Podnajem",
        // Order customer
        name: values.nameAndSurname,
        email: values.email,
        phone: values.phone,
        message: values.message,
        consent: values.termsConsent,
        // Order details

        boxes: values.hasBoxes,
        cupAmount: values.cupAmount,
        boxesAmount: values.boxesAmount,
        cupProducer: values.cupProducer,

        // Company detaila
        nip: values.nip,
        companyName: values.companyName,
        country: values.country,
        postCode: values.postCode,
        city: values.city,
        street: values.street,
        buildingNumber: values.buildingNumber,
        flatNumber: values.flatNumber ? values.flatNumber : "Brak",
        // Shipment data
        shipmentData: "Takie same jak na fakturze",
      };
    } else {
      message = {
        contactType: "Podnajem",
        // Order customer
        name: values.nameAndSurname,
        email: values.email,
        phone: values.phone,
        message: values.message,
        consent: values.termsConsent,
        // Order details

        boxes: values.hasBoxes,
        cupAmount: values.cupAmount,
        boxesAmount: values.boxesAmount,
        cupProducer: values.cupProducer,

        // Compeny detaila
        nip: values.nip,
        companyName: values.companyName,
        country: values.country,
        postCode: values.postCode,
        city: values.city,
        street: values.street,
        buildingNumber: values.buildingNumber,
        flatNumber: values.flatNumber ? values.flatNumber : "Brak",
        // Shipment data
        shipmentData: "Inne dane wysyłki",
        shipmentCountry: values.shipmentCountry,
        shipmentPostCode: values.shipmentPostCode,
        shipmentCity: values.shipmentCity,
        shipmentStreet: values.shipmentStreet,
        shipmentBuildingNumber: values.shipmentBuildingNumber,
        shipmentFlatNumber: values.shipmentFlatNumber
          ? values.shipmentFlatNumber
          : "Brak",
      };
    }

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      if (response.status === 200) {
        setLoadingStatus(LoadingStatus.SEND);
        form.reset();
      }
    } catch (err) {
      setLoadingStatus(LoadingStatus.NOT_LOADING);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:border-[#E5E5E5] lg:border-r lg:pr-10">
            <h1 className="text-2xl tracking-[-0.5px] mb-6">
              1. Konfiguracja zakupu kubków
            </h1>
            <FormField
              control={form.control}
              name="cupProducer"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-[1rem] font-bold">
                    Producent kubków:
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Nazwa producenta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hasBoxes"
              render={({ field }) => (
                <FormItem className="space-y-3 mt-6">
                  <FormLabel className="text-[1rem] font-bold">
                    Czy posiadasz skrzynki na kubki?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="tak" />
                        </FormControl>
                        <FormLabel className="font-normal text-[1rem]">
                          Tak
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="nie" />
                        </FormControl>
                        <FormLabel className="font-normal text-[1rem]">
                          Nie
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
                      <Input placeholder="np. 5000" {...field} type="number" />
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
                      <Input placeholder="np. 50" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex-1 lg:pl-10 ">
            <h2 className="text-2xl tracking-[-0.5px] mb-6 mt-10 lg:mt-0">
              2. Dane firmy
            </h2>
            <div className="mt-3 flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="nip"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">NIP</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">Nazwa firmy</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-3 flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">Kraj</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postCode"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">
                      Kod pocztowy
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-3 flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">Miejscowość</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">Ulica</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-3 flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="buildingNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">Nr budynku</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="flatNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">
                      Nr mieszkania
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="differentShipmentData"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center my-6 space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 text-[14px]">
                    <FormLabel>
                      Dane do wysyłki są inne niż dane do faktury
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            {differentShipment && (
              <div className="mb-6">
                <h2 className="text-2xl tracking-[-0.5px] mb-6 mt-10 lg:mt-0">
                  Dane do wysyłki
                </h2>
                <div className="mt-3 flex flex-col gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="shipmentCountry"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-[.75rem]">Kraj</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shipmentPostCode"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-[.75rem]">
                          Kod pocztowy
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-3 flex flex-col gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="shipmentCity"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-[.75rem]">
                          Miejscowość
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shipmentStreet"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-[.75rem]">Ulica</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-3 flex flex-col gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="shipmentBuildingNumber"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-[.75rem]">
                          Nr budynku
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shipmentFlatNumber"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-[.75rem]">
                          Nr mieszkania
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}
            <h2 className="text-2xl tracking-[-0.5px] mb-6 mt-10 lg:mt-0">
              3. Dane kontaktowe
            </h2>
            <div className="mt-3 flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="nameAndSurname"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">
                      Imię i nazwisko
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-3 flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">
                      Adres e-mail
                    </FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[.75rem]">Nr telefonu</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-3 flex flex-col  w-full gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Wiadomość</FormLabel>
                    <FormControl>
                      <Textarea className="resize-none w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="termsConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center my-6 space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 text-[14px]">
                    <FormLabel>
                      Zgadzam się na{" "}
                      <Link href={links.privacyPolicy} className="underline">
                        Politykę Prywatności
                      </Link>
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <Button
              className={`uppercase w-full my-3 text-base py-3 hover:bg-primaryGreen tracking-[0.84px] bg-secondaryGreen ${mono.className}`}
              type="submit"
            >
              {loadingStatus === LoadingStatus.NOT_LOADING && (
                <span className="flex">
                  WYŚLIJ ABY OTRZYMAĆ OFERTĘ <ArrowUpRight className="ml-2 " />
                </span>
              )}
              {loadingStatus === LoadingStatus.PENDING && (
                <span>
                  <Loader className="animate-spin" />
                </span>
              )}
              {loadingStatus === LoadingStatus.SEND && (
                <span className="flex">
                  WYSŁANO <Send className="ml-2 " />
                </span>
              )}
            </Button>
            <p className="text-center text-xs">
              Na Twoją wiadomosć odpowiemy w ciągu 48h!
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SubleaseForm;
