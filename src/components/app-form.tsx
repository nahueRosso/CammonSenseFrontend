"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

export function ProfileForm({ fields, data }: { fields: any; data:any }) {

  type FormData = typeof fields

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

  const defaultValues: FormData = data; 

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((item: any, index: number) => (
          <div key={index}>{item}</div>
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
