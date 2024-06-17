'use server'
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type TUser = {
    id: string,
    firstName: string,
    lastName: string
}

export const createUser = async (prevState: any, formData: FormData) => {
    'use server';
    await new Promise((resolve) => setTimeout(resolve,3000))
    const rawData = Object.fromEntries(formData)
    const newUser: TUser = {
        id: Date.now().toString(),
        firstName: rawData.firstName as string,
        lastName: rawData.lastName as string,
    }
    try {
        await saveUser(newUser);
        revalidatePath('/actions')
        return 'user created successfully'
    } catch (error) {
        return 'failed to create user...'
    }
}

export const fetchUsers = async ():Promise<TUser[]> => {
    const result = await readFile('users.json',{encoding: 'utf8'});
    const users = result? JSON.parse(result) : []
    return users;
}

export const saveUser = async (user: TUser) => {
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users))
}