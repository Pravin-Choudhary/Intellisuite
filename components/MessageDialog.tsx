"use client"

import { useId } from "react"
import { MessageSquareText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"

type MessageDialogType = {
  title : string,
  description : string,
  triggerText : string,
  variantType ?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link',
  className ?: string
}

export default function MessageDialog({title , description , triggerText , variantType = 'default' , className = '' } : MessageDialogType ) {
  const id = useId()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant={variantType} className={className}>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <MessageSquareText className="opacity-80" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="text-left">{title}</DialogTitle>
            <DialogDescription className="text-left">
              {description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`name-${id}`}>Name</Label>
              <Input id={`name-${id}`} type="text" required placeholder="Your Name"/>
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`email-${id}`}>Email</Label>
              <div className="relative">
                <Input
                  placeholder="Email address"
                  id={`email-${id}`}
                  className="peer pe-9 [direction:inherit]"
                />
              </div>
            </div>
            <div className="*:not-first:mt-2 ">
              <Label htmlFor={`social-${id}`}>Social handle</Label>
              <div className="relative">
                <Input
                  placeholder="Company/Instagram handle"
                  id={`social-${id}`}
                  className="peer pe-9 [direction:inherit]"
                />
              </div>
            </div>
            <div className="*:not-first:mt-2 ">
              <Label htmlFor={`message-${id}`}>Message</Label>
              <div className="relative">
                <Textarea
                  placeholder="Tell us about your dashboard needs"
                  id={`message-${id}`}
                  className="peer pe-9 [direction:inherit]"
                />
              </div>
            </div>
          </div>
          <Button 
            type="button" 
            size="lg"
            className="w-full bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium"
          >
            Send
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
  )
}