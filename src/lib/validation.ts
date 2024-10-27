import { z } from "zod";

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  teachers: z.array(z.string()),
});

export type SubjectSchema = z.infer<typeof subjectSchema>;

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  capacity: z.coerce.number().min(1, { message: "Capacity is required" }),
  supervisorId: z.coerce
    .string()
    .min(1, { message: "Name is required" })
    .optional(),
  gradeId: z.coerce.number().min(1, { message: "Grade is required" }),
});

export type ClassSchema = z.infer<typeof classSchema>;
