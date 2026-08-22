import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../generated/prisma/client"
import "dotenv/config"

const databaseUrl = process.env.DATABASE_URL

if(!databaseUrl) {
    throw new Error("DATABASE_URL is not configured")
}

const adapter = new PrismaPg({connectionString: databaseUrl})

export const db = new PrismaClient({adapter})