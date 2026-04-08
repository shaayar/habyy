import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// This tells Next.js where to find your JSON file
const dataFilePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request) {
    try {
        // 1. Get the email and password sent from the frontend
        const { email, password } = await request.json();

        // 2. Read the current data from the JSON file
        const fileData = await fs.readFile(dataFilePath, "utf8");
        const data = JSON.parse(fileData);

        // 3. Check if the user already exists
        const userExists = data.users.find((user) => user.email === email);
        if (userExists) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // 4. Create a new user object
        const newUser = {
            id: Date.now().toString(), // Simple way to generate a unique ID
            email,
            password, // Note: In a real app, you would hash this password!
        };

        // 5. Add the new user to the array and save the file
        data.users.push(newUser);
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));

        // 6. Send a success message back to the frontend
        return NextResponse.json({ message: "User created successfully!" }, { status: 201 });

    } catch (error) {
        console.error("🚨 BACKEND CRASH REASON:", error);

        return NextResponse.json({ error: "Failed to create user hinal" }, { status: 500 });
    }
}