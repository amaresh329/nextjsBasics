import { DBconnection } from "@/app/utils/config/db";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({student:"all student data"})
}

const connectDB=async()=>{
    await DBconnection();
}
connectDB();