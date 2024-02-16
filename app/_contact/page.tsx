"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
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
import { Input } from "@/components/ui/input";
import { Code, Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().min(3, {
    message: "Message must be at least 3 characters.",
  }),
});

function Contact() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    form.reset();
    open(
      `mailto:soninirav1908@gmail.com?subject=${values.subject} &body=${values.message}`
    );
  }

  return (
    <>
      <h1
        id="contact"
        className="text-center pt-10 font-medium text-xl md:font-semibold md:text-2xl"
      >
        Contact Me
      </h1>
      <div className="p-10 md:max-w-screen-sm m-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      className="shadow-md"
                      placeholder="Enter Your Subject Here ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={7}
                      className="shadow-md"
                      placeholder="Enter Your Message Here ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-[#4f46e5] shadow-2xl text-white hover:bg-blue-900 hover:text-white"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Mail
            </Button>
          </form>
        </Form>
      </div>
      <div className="flex justify-center p-10 gap-5 md:gap-10">
        <Link href="https://www.linkedin.com/in/soni-nirav" target="_blank">
          <Linkedin className="size-8 md:size-10" />
        </Link>
        <Link href="https://www.twitter.com/_soninirav" target="_blank">
          <Twitter className="size-8 md:size-10" />
        </Link>
        <Link href="https://www.github.com/soninirav" target="_blank">
          <Github className="size-8 md:size-10" />
        </Link>
        <Link href="mailto:soninirav1908@gmail.com" target="_blank">
          <Mail className="size-8 md:size-10" />
        </Link>
        {/* <Link href="https://www.leetcode.com/soninirav" target="_blank">
          <Code size={"40"} />
        </Link> */}
      </div>
    </>
  );
}

export default Contact;
