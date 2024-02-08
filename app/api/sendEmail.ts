"use server"

import {Resend} from "resend";
import { validateString } from "./utils";



const resend = new Resend('re_QoLzBNC8_GwYkX6oG8R5d6SehemeXVSPt');

resend.apiKeys.create({ name: 'Production' });

export const sendEmail = async (formData : FormData) => {
    const senderEmail = formData.get('senderEmail')
  
    if (!validateString(senderEmail, 500)) {
      return {
        error: "Invalid Email",
      };
    }
  
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'emiliocapo23@gmail.com',
        subject: 'Mensaje de contacto',
        text: senderEmail as string,
        reply_to: senderEmail as string,
      });
      
      return {
        message: "Correo enviado exitosamente. Gracias por tu mensaje."
      };
      
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      return {
        error: "Hubo un error al enviar el correo electrónico."
      };
    }
  }