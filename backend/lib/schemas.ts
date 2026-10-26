import { isStoredLeadId } from './lead-id.mjs';
import * as z from 'zod';

export const ScrapeSchema = z.object({
  address: z.string().min(5, 'Dirección demasiado corta').max(300),
  line: z.enum(['decoracion', 'nautica']).default('decoracion'),
});

export const AnalyzeSchema = z.object({
  leadId: z.string().refine(isStoredLeadId, 'Identificador de lead inválido'),
  name: z.string().min(1).max(150),
  types: z.array(z.string().max(80)).max(20),
  // A photo is optional: stored Google photo references never include API keys.
  photoUrl: z.string().url().max(2048).refine(value => value.startsWith('https://'), 'Solo HTTPS').optional(),
});

export const SendEmailSchema = z.object({
  leadId: z.string().refine(isStoredLeadId, 'Identificador de lead inválido'),
  to: z.string().email('Email inválido').max(254),
  subject: z.string().min(5).max(160),
  body: z.string().min(20).max(5000),
});

export const OrderSchema = z.object({
  company_name: z.string().min(2, 'Nombre requerido'),
  contact_name: z.string().optional(),
  email: z.string().email('Email inválido'),
  project_type: z.enum(['Decoracion', 'Branding', 'Nautica', 'Custom']),
  material: z.string().optional(),
  message: z.string().min(15, 'Cuéntanos un poco más del proyecto'),
  budget: z.number().optional(),
});
