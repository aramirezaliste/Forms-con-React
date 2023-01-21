import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";



export const Register = () => {
    let navigate = useNavigate();


    return (
        <div className="container">
            <form onSubmit={(event)=>{
                event.preventDefault(); //Previene que no se actualice el formulario
                let mail = event.target[0].value
                let pass = event.target[1].value
                let rpass = event.target[2].value

                if (pass != rpass){
                    alert('Las contraseñas deben ser identicas')
                }else if (mail == '' || pass == '' || rpass == '') {
                    alert('Debe completar los campos')
                }else {
                    alert('registro completado')
                    navigate('/login')
                }
            }}>
                <div className="mb-3 row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmai" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPasswordTwo" className="col-sm-2 col-form-label">
                        Reingresar Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPasswordTwo" />
                    </div>
                </div>
                <button className="btn btn-success" type="submit">Enviar</button>
            </form>
        </div>
    )
}