const CaptchaKey = import.meta.env.CAPTCHA_SECRET_API_KEY;

import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    SubmitFormAction: defineAction({
      accept: "form",
      input: z.object({
        name: z.string(),
      }),
      handler: async (input) => {
        console.log(`Hello, ${input.name}!`)
        return `Hello, ${input.name}!`
      }
    })};

type formData = {
    name: string;
    email: string;
    message: string;
};

export async function processCaptcha(g_recaptcha_response: string) {
    const url =
      'https://www.google.com/recaptcha/api/siteverify'
  
    const requestBody = new URLSearchParams({
      secret:
        import.meta.env.RECAPTCHA_SECRET_KEY ||
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

export async function sendEmail(FormData)
{
    try {
        console.log("Test log");
    
        //const formData = await Astro.request.formData();
    
        //const CaptchaResponse = formData.get('g-recaptcha-response')?.toString();
       // const is_valid_captcha = await processCaptcha(CaptchaResponse);
        /*
        if (is_valid_captcha)
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
