import Header from "@/components/Header";
import axios from 'axios'
import React from "react";
import { IUser } from "./api/users";

const UsersPage = ({users}: any) => {

    const arr = new Array(10).fill(20)

    console.log(users)

    return ( 
        <div className="w-full">
            <Header />
            <div className="">
                {arr.map(el => (
                    <div>{el}</div>
                ))}
            </div>
        </div>
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