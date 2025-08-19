
import axios from 'axios'
import { NextResponse } from 'next/server'

export const GET = async () => {
   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
   return NextResponse.json(response.data.slice(0, 5));
}