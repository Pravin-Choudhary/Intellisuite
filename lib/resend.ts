"use server"

import ContactEmail from "@/email/emailFormat";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface sendEmailPropsType {
    name : string,
    email : string,
    social : string,
    message : string
}

export const sendEmail = async ({name , email ,social, message} : sendEmailPropsType) => {
    try {
        const data = await resend.emails.send({
                            from: "IntelliSuite <onboarding@resend.dev>",
                            to: "info@intellisuite.in",
                            subject: "New Dashboard Request",
                            react: ContactEmail({ name, email, social, message }),
                        });

         return true;
    } catch (error : any) {
        console.log("Error While Sending Email : ",error.message);
        return false;
    }
}