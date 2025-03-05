const CaptchaKey = import.meta.env.CAPTCHA_SECRET_API_KEY;
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

import { string } from 'astro/zod';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

type EmailFormData = {
  name: string;
  email: string;
  message: string;
};

export const server = {
    SubmitFormAction: defineAction({
        accept: 'form',
        input: z.object({
          name: z.string(),
          email: z.string(),
          message: z.string(),
          CaptchaToken: z.string(),
        }),
      handler: async (input) => {

        console.log("SubmitForm action data: ");
        console.log(input);
        
        const IsValidCaptcha = processCaptcha(input.CaptchaToken);

        if(IsValidCaptcha)
        {
            const formData : EmailFormData =
            {
              name: input.name,
              email: input.email,
              message: input.message,
            }
            
            sendEmail(formData);

            return `Succsess`;
        }
        else
        {
          return `Fail`;
        }
      }
    })
  };




export async function processCaptcha(g_recaptcha_response: string) {
    const url =
      'https://www.google.com/recaptcha/api/siteverify'
  
    const requestBody = new URLSearchParams({
      secret:
        CaptchaKey,
      response: g_recaptcha_response
    })

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: requestBody.toString()
    })
  
    const data = await response.json()

    console.log(data)
    
    return data.success
}

export async function sendEmail(formData : EmailFormData)
{
  console.log("Send 1");
  if (!formData.name || !formData.email || !formData.message) {
    return new Response(
      JSON.stringify({
        message: `Fill out all fields.`,
      }),
      {
        status: 404,
        statusText: "Did not provide the right data",
      },
    );
  } 
  console.log("Send 2");
  // Sending information to Resend

  const sendResend = await resend.emails.send({
    from: "test <Portfolio@resend.dev>",
    to: "SamuelJamesFisher1@gmail.com",
    subject: 'Portfolio Enquiry',
    html: `<p>${formData.name} contacted you through the portfolio website</p><p>The message was {formData.message}</p>`,
  }); // If the message was sent successfully, return a 200 response

  if (sendResend.data) {
    console.log("Sent");
    return new Response(
      JSON.stringify({
        message: `Message successfully sent!`,
      }),
      {
        status: 200,
        statusText: "OK",
      },
    ); // If there was an error sending the message, return a 500 response
  } else {
    console.log("Send 4");
    return new Response(
      JSON.stringify({
        message: `Message failed to send: ${sendResend.error}`,
      }),
      {
        status: 500,
        statusText: `Internal Server Error: ${sendResend.error}`,
      },
    );
  }
}
