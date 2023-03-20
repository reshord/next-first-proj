import axios from "axios"
import { useRouter } from "next/router"
import { useNavigate } from "react-router-dom"
import { IUser } from "../api/users"

interface IUsers {
    users: IUser[]
}

export default function Users({users}: IUsers) {

    const {query} = useRouter()

    const currentUser = users.filter(el => query.id && el.id === +query.id)[0]

    return (
        <div className=''>
            <div className="border-2 border-slate-800 rounded-lg p-2 m-5 w-max">
                <span className="font-bold text-lg">User Card :</span>
                <h1>User name: {currentUser.name}</h1>
                <h1>User email: {currentUser.email}</h1>
                <h1>Username: {currentUser.username}</h1>
                <h1>User Id: {currentUser.id}</h1>
            </div>
        </div>
    )
}


export const getStaticProps = async () => {
   
    const {data} = await axios.get<IUser[]>('http://localhost:3000/api/users')

    return {
        props: {
            users: data
        }
    }
}

export const getStaticPaths = async () => {
    const {data} = await axios.get<IUser[]>('http://localhost:3000/api/users')

    const paths = data.map(el => ({params: {id: `${el.id}`}}))

    return {
        paths, 
        fallback: 'blocking'
    }
}