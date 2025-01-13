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
import {
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import { Input } from "@/components/ui/input";



// export type FormDefaultType = {
//   username: string;
//   email: string;
//   password: string;
// };


type FormData = {
    username: string;
    email: string;
    password: string;
  };

export function CustomField({
  name,
  label,
  placeholder,
  type = "text",
  description,
}: {
  name: keyof FormData;
  label: string;
  placeholder?: string;
  type?: string;
  description?: string;
}) {
  const { control } = useFormContext<FormData>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}


export const userData:FormData = {
  username: "sadasdsa",
  email: "",
  password: "securepassword",
};

export const formSchema = z.object({
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

export const formDefault = [
  <CustomField
    name="username"
    label="Username"
    placeholder="shadcn"
    description="This is your public display name."
  />,
  <CustomField
    name="email"
    label="Email"
    placeholder="you@example.com"
    description="We'll never share your email with anyone else."
  />,
  <CustomField
    name="password"
    label="Password"
    type="password"
    placeholder="********asdsa"
    description="Make sure your password is strong and unique."
  />]
