//.src/routes/user.service.ts
import { userRepository } from "../repositories/user.repository.js";

export async function getAllUsers() {
  return await userRepository.findAll();
}

export async function createUser(name: string, email: string) {
  // aqui caberia regra de negócio extra, ex: checar email duplicado
  return await userRepository.create(name, email);
}

export async function updateUserEmail(email: string, newEmail: string) {
  return await userRepository.updateEmail(email, newEmail);
}

export async function softDeleteUser(email: string) {
  return await userRepository.softDelete(email);
}