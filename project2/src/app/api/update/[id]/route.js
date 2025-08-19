import axios from 'axios'
import { NextResponse } from 'next/server'

export async function PUT(_req, { params }) {
  const { id } = params || {}
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  try {
    const payload = { title: 'Updated title', body: 'Updated body', userId: 1 }
    const { data } = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, payload)
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log(error.message)
  }
}