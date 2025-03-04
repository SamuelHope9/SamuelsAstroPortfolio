const CaptchaKey = import.meta.env.CAPTCHA_SECRET_API_KEY;

import { string } from 'astro/zod';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';


/*
input: z.object({
            name: z.string(),
            email: z.string(),
            message: z.string(),
          }),

*/


export const server = {
    SubmitFormAction: defineAction({
        accept: 'form',
      handler: async (input) => {

        console.log("SubmitForm action data: ");
        console.log(input);
        //const CaptchaResponse = String(token);
        //const IsValidCaptcha = processCaptcha(CaptchaResponse)

        //if(IsValidCaptcha)
        //{
         //   console.log("Valid ");
        //}

        return `Hello!`;

        
        //const IsValidCaptcha = await processCaptcha(CaptchaResponse);
        //const is_valid_captcha = await processCaptcha(Captcha)

        //if (is_valid_captcha)
        //{
            //const is_valid_captcha = await sendEmail(Captcha)
        //}

        //return `Hello, ${input.name}!`
      }
    })
  };


type formData = {
    name: string;
    email: string;
    message: string;
    Captcha: string;
};

export async function processCaptcha(g_recaptcha_response: string) {
    const url =
      'https://www.google.com/recaptcha/api/siteverify'
  
    const requestBody = new URLSearchParams({
      secret:
        CaptchaKey,
      response: g_recaptcha_response
    })
    console.log("Try captcha");

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

export async function sendEmail(FormData)
{
    try {
        console.log("Test log");
    
        /* 
        if (IsValidCaptcha)
        {
          
          const response = await fetch(Astro.url + "/api/sendEmail.json", {
          method: "POST",
          body: formData
          })
    
          const data: formData = await response.json();
    
          if (response.status === 200) {
            console.log(data.message); 
          }
        }
          */
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error: ${error.message}`); 
        }
      }
        
}
