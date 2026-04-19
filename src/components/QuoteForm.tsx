"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.enum([
    "Essential Clean (Recurring)",
    "Deep Sanctuary Clean",
    "Eco-Move In/Out",
    "Custom Add-ons",
    "Not sure yet",
  ]),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const serviceOptions = [
  "Essential Clean (Recurring)",
  "Deep Sanctuary Clean",
  "Eco-Move In/Out",
  "Custom Add-ons",
  "Not sure yet",
] as const;

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const selectedService = watch("service");

  async function onSubmit(data: QuoteFormData) {
    setServerError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const body = await res.json().catch(() => null);
        setServerError(
          body?.error || "Something went wrong. Please try again or call (872) 235-9880."
        );
      }
    } catch {
      setServerError(
        "Something went wrong. Please try again or call (872) 235-9880."
      );
    }
  }

  if (submitted) {
    return (
      <div className="bg-background-alt rounded-2xl p-10 border border-border text-center">
        <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Quote request sent!
        </h2>
        <p className="text-muted-foreground">
          I&rsquo;ll get back to you within one business day with a personalized
          estimate. If you need something sooner, call or text{" "}
          <a
            href="tel:8722359880"
            className="text-primary hover:text-primary-hover font-medium"
          >
            (872) 235-9880
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-background-alt rounded-2xl p-6 sm:p-8 border border-border space-y-5"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(312) 555-0100"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-destructive text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Service *</Label>
          <Select
            value={selectedService ?? undefined}
            onValueChange={(val) =>
              setValue("service", val as QuoteFormData["service"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger
              className="w-full"
              aria-invalid={!!errors.service}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-destructive text-sm">{errors.service.message}</p>
          )}
        </div>
      </div>

      {/* Bedrooms + Bathrooms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <Input
            id="bedrooms"
            placeholder="e.g. 3"
            {...register("bedrooms")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bathrooms">Bathrooms</Label>
          <Input
            id="bathrooms"
            placeholder="e.g. 2"
            {...register("bathrooms")}
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Anything else I should know?</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Pets, specific areas to focus on, preferred schedule, etc."
          {...register("message")}
        />
      </div>

      {serverError && (
        <p className="text-destructive text-sm font-medium">{serverError}</p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg px-8 py-5 text-base font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Sending...
          </>
        ) : (
          "Send Quote Request"
        )}
      </Button>
    </form>
  );
}
