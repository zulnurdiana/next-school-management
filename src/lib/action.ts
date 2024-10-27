"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { ClassSchema, SubjectSchema } from "./validation";

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
        teachers: {
          connect: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
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
        teachers: {
          set: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
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
export const createClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.create({
      data: data,
    });

    /*  revalidatePath("/list/class"); */
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

export const updateClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.update({
      data: data,
      where: {
        id: data.id,
      },
    });

    /*  revalidatePath("/list/class"); */
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
export const deleteClass = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.class.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};
