import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const payload = { title: 'Hello', body: 'Next.js API test', userId: 1 }

    const { data } = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      payload
    )

    return NextResponse.json(data, {
      status: 200
    })
  } catch (error) {
    console.log(error)
  }
}