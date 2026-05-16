import { MessageCircle, Mail } from "lucide-react";

type Variant = "primary" | "onAccent";

export function ContactCTA({ variant = "primary" }: { variant?: Variant }) {
  const textStyles =
    variant === "onAccent"
      ? "bg-background text-foreground hover:bg-background-alt"
      : "bg-primary hover:bg-primary-hover text-primary-foreground";

  const emailStyles =
    variant === "onAccent"
      ? "border border-background/40 text-accent-foreground hover:bg-background/10"
      : "border border-border text-foreground hover:bg-background-alt";

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <a
        href="sms:8722359880"
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition-colors ${textStyles}`}
      >
        <MessageCircle className="w-5 h-5" />
        Text (872) 235-9880
      </a>
      <a
        href="mailto:precioushomehelp@gmail.com"
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition-colors ${emailStyles}`}
      >
        <Mail className="w-5 h-5" />
        precioushomehelp@gmail.com
      </a>
    </div>
  );
}
