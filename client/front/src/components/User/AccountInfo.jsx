import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import s from './UserComponent.module.css';
import { useParams } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export default function AccountInfo() {
    const { user, isAuthenticated, isLoading } = useAuth0()
    const dispatch = useDispatch()



    let { id } = useParams()
    const [usuario, setUsuario] = useState(null)


    useEffect(() => {
        axios.get(`http://localhost:3001/users?fullName=${user.name}`)
            .then((res) => {
                setUsuario(res.data)
            })
        return () => {
            setUsuario(null)
        }
    }, [id])


    function reverseString(str) {
        return str.split('-').reverse().join('-');
    }


    return (
        isAuthenticated &&
        <>
            <div>{
                usuario ?
                    <div className={s.AccountInfo} >
                        <div className={s.AInfoCard}>
                            <div className={s.topInfo}>
                                <h3 className={s.accountName}> {usuario[0].username}</h3>
                                <p>Birthday: {usuario[0].birthday ? reverseString(usuario[0].birthday) : "no birthday registered"}</p>
                            </div>
                            <div>
                                <img src={usuario[0].picture} alt="userPic" className={s.profilePic} />
                            </div>
                            <div className={s.contactInfo}>
                                <h2>Contant info</h2>
                                <hr />
                                <h4>Default Billing Address: {usuario[0].addressLineOne}, {usuario[0].addressLineTwo}</h4>
                                <h4>Phone number: {usuario[0].telephone}</h4>
                            </div>
                        </div>
                    </div > :
                    "usuario no disponible"
            } </div>
        </>
    )
}