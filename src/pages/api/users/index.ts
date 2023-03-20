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

  const newUsers = data.map(el => {
    return {
      id: el.id,
      name: el.name,
      username: el.username,
      email: el.email
    }
  })

  res.status(200).json(newUsers)
}
