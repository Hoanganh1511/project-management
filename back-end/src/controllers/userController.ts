import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving users: ${error.message}` });
  }
};
// {
//   title,
//   description,
//   status,
//   priority,
//   tags,
//   startDate,
//   dueDate,
//   points,
//   projectId,
//   authorUserId,
//   assignedUserId,
// }
// export const createTask = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const {
//     title,
//     description,
//     status,
//     priority,
//     tags,
//     startDate,
//     dueDate,
//     points,
//     projectId,
//     authorUserId,
//     assignedUserId,
//   } = req.body;
//   try {
//     const newTask = await prisma.task.create({
//       data: {
//         title,
//         description,
//         status,
//         priority,
//         tags,
//         startDate,
//         dueDate,
//         points,
//         projectId,
//         authorUserId,
//         assignedUserId,
//       },
//     });
//     res.status(201).json(newTask);
//   } catch (error: any) {
//     res
//       .status(500)
//       .json({ message: `Error creating a task: ${error.message}` });
//   }
// };
// export const updateTaskStatus = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { taskId } = req.params;
//   const { status } = req.body;
//   try {
//     const updatedTask = await prisma.task.update({
//       where: {
//         id: Number(taskId),
//       },
//       data: {
//         status: status,
//       },
//     });
//     res.json(updatedTask);
//   } catch (error: any) {
//     res.status(500).json({ message: `Error updating  task: ${error.message}` });
//   }
// };
