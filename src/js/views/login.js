import React from 'react'

export const Login = () => {


  return (
    <div className="container">
            <form onSubmit={(event)=>{
                event.preventDefault(); //Previene que no se actualice el formulario
                let mail = event.target[0].value
                let pass = event.target[1].value

                if (mail || pass  == '') {
                    alert('Debe completar los campos')
                }else {
                    alert('Inicio de sesion completado')
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
                <button className="btn btn-success" type="submit">Enviar</button>
            </form>
        </div>
  )
}
