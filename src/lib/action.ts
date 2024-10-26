"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { SubjectSchema } from "./validation";

type CurrentState = {
  success: boolean;
  error: boolean;
};

export const createSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    const { name } = data;

    await prisma.subject.create({
      data: {
        name,
      },
    });

    /*  revalidatePath("/list/subjects"); */
    return {
      success: true,
      error: false,
    };
  } catch (error) {
    return {
      success: false,
      error: true,
    };
  }
};

export const updateSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    const { name } = data;

    await prisma.subject.update({
      data: {
        name,
      },
      where: {
        id: data.id,
      },
    });

    /*  revalidatePath("/list/subjects"); */
    return {
      success: true,
      error: false,
    };
  } catch (error) {
    return {
      success: false,
      error: true,
    };
  }
};
export const deleteSubject = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.subject.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};
