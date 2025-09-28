import { z } from "zod";
import { CONTACT_CONFIG } from "@/constants";

export const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "El nombre es requerido")
    .max(CONTACT_CONFIG.FORM_MAX_LENGTHS.NAME, `El nombre debe tener menos de ${CONTACT_CONFIG.FORM_MAX_LENGTHS.NAME} caracteres`),
  email: z.string()
    .trim()
    .email("Email inválido")
    .max(CONTACT_CONFIG.FORM_MAX_LENGTHS.EMAIL, `El email debe tener menos de ${CONTACT_CONFIG.FORM_MAX_LENGTHS.EMAIL} caracteres`),
  organization: z.string()
    .trim()
    .max(CONTACT_CONFIG.FORM_MAX_LENGTHS.ORGANIZATION, `La organización debe tener menos de ${CONTACT_CONFIG.FORM_MAX_LENGTHS.ORGANIZATION} caracteres`)
    .optional(),
  message: z.string()
    .trim()
    .min(1, "El mensaje es requerido")
    .max(CONTACT_CONFIG.FORM_MAX_LENGTHS.MESSAGE, `El mensaje debe tener menos de ${CONTACT_CONFIG.FORM_MAX_LENGTHS.MESSAGE} caracteres`),
  topic: z.string()
    .trim()
    .max(CONTACT_CONFIG.FORM_MAX_LENGTHS.TOPIC, `El tema debe tener menos de ${CONTACT_CONFIG.FORM_MAX_LENGTHS.TOPIC} caracteres`)
    .optional(),
  website: z.string().optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactSchema>;