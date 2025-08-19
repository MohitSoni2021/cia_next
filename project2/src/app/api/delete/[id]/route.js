import axios from 'axios'
import { NextResponse } from 'next/server'

export async function DELETE(_req, { params }) {
  const { id } = params || {}
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  try {
    const { data, status } = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return NextResponse.json({ status, data }, { status })
  } catch (error) {
    console.log(error.message)
  }
}