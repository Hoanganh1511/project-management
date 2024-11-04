"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving users: ${error.message}` });
    }
});
exports.getUsers = getUsers;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, cognitoId, profilePictureUrl = "i1.jpg", teamId = 1, } = req.body;
        const newUser = yield prisma.user.create({
            data: {
                username,
                cognitoId,
                profilePictureUrl,
                teamId,
            },
        });
        res.json({ message: "User Created Successfully", newUser });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving users: ${error.message}` });
    }
});
exports.postUser = postUser;
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
