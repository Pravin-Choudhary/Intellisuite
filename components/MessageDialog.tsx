"use client";

import { useId, useState, useTransition } from "react";
import { MessageSquareText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/lib/resend"; // ✅ directly imported server action
import { toast } from "sonner";

type MessageDialogType = {
  title: string;
  description: string;
  triggerText: string;
  variantType?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
};

export default function MessageDialog({
  title,
  description,
  triggerText,
  variantType = "default",
  className = "",
}: MessageDialogType) {
  const id = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [social, setSocial] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [loading ,setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      const success = await sendEmail({ name, email, social, message });
      setLoading(true);

      if (success) {
        setLoading(false);
        toast.success('Email sended,we will reach out you soon!', {
          style: {
            '--normal-bg':
              'color-mix(in oklab, light-dark(var(--color-green-600), var(--color-green-400)) 10%, var(--background))',
            '--normal-text': 'light-dark(var(--color-green-600), var(--color-green-400))',
            '--normal-border': 'light-dark(var(--color-green-600), var(--color-green-400))'
          } as React.CSSProperties
        });
        setName("");
        setEmail("");
        setSocial("");
        setMessage("");
      } else {
        setLoading(false);
        toast.error('Failed to send email. Please try again.', {
          style: {
            '--normal-bg': 'color-mix(in oklab, var(--destructive) 10%, var(--background))',
            '--normal-text': 'var(--destructive)',
            '--normal-border': 'var(--destructive)'
          } as React.CSSProperties
        })
      }
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant={variantType} className={className}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
            <MessageSquareText className="opacity-80" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">{title}</DialogTitle>
            <DialogDescription className="text-left">{description}</DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`name-${id}`}>Name</Label>
              <Input
                id={`name-${id}`}
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`email-${id}`}>Email</Label>
              <Input
                id={`email-${id}`}
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`social-${id}`}>Social handle</Label>
              <Input
                id={`social-${id}`}
                placeholder="Company/Instagram handle"
                value={social}
                onChange={(e) => setSocial(e.target.value)}
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`message-${id}`}>Message</Label>
              <Textarea
                id={`message-${id}`}
                placeholder="Tell us about your dashboard needs"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="w-full bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium"
          >
            {isPending ? "Sending..." : "Send"}
          </Button>

          <Button
            type="button"
            size="lg"
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base font-medium"
          >
            Cancel
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
