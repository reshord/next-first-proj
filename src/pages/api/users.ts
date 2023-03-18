import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {data} = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')

  res.status(200).json(data)
}
