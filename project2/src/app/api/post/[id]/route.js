import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
   const id = params.id;
   const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
   return NextResponse.json(response.data);
}

