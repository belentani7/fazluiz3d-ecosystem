import * as z from 'zod';

export const ScrapeSchema = z.object({
  address: z.string().min(5, "Dirección demasiado corta"),
  line: z.enum(["decoracion", "nautica"]).default("decoracion"),
});

export const AnalyzeSchema = z.object({
  leadId: z.string().uuid(),
  name: z.string(),
  types: z.array(z.string()),
  photoUrl: z.string().url(),
});

export const SendEmailSchema = z.object({
  leadId: z.string().uuid(),
  to: z.string().email("Email inválido"),
  subject: z.string().min(5),
  body: z.string().min(20),
});

export const OrderSchema = z.object({
  company_name: z.string().min(2, "Nombre requerido"),
  contact_name: z.string().optional(),
  email: z.string().email("Email inválido"),
  project_type: z.enum(["Decoracion", "Branding", "Nautica", "Custom"]),
  material: z.string().optional(),
  message: z.string().min(15, "Cuéntanos un poco más del proyecto"),
  budget: z.number().optional(),
});
