import Header from "@/components/Header";
import axios from 'axios'
import React from "react";
import { IUser } from "./api/users";

const UsersPage = ({users}: {users: IUser[]}) => {

    // console.log(users)

    return ( 
        <>
            <Header />
            <div className="flex justify-center items-center h-screen">
                <div className=''>
                    {users.map(el => (
                        <div className="text-cyan-800 font-bold text-lg mt-2">{el.name}</div>
                    ))}
                </div>
            </div>
        </>
     );
}

export const getStaticProps = async () => {
    const {data} = await axios.get<IUser[]>('http://localhost:3000/api/users')

    return {
        props: {
            users: data
        }
    }
}
 
export default UsersPage;