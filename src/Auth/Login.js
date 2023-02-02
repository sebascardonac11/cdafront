import React, {useState,useContext} from "react";
import { AccountContext } from "./Account";
import { Button } from 'react-bootstrap';

const Login = () => {
        const [email, setEmail]= useState('');
        const [password, setPassword]= useState('');

        const {authenticate} = useContext(AccountContext);
        const onSubmit = (event) => {
            event.preventDefault();
            authenticate(email,password).then(data =>{
                console.log("Logueado",data)
            }).catch(err =>{
                console.error("Fallo",err);
            });
            
        }

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(event)=>setEmail(event.target.value)}></input>

                    <label htmlFor="password">Contraseña</label>
                    <input value={password} onChange={(event)=>setPassword(event.target.value)}></input>

                    <Button type="submit" variant="primary">Ingresar</Button>
                </form>
            </div>
        );

};

export {Login}