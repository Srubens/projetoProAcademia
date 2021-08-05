import React, { useState } from 'react'
import Link from 'next/link'

const Cadastro = () =>{

    const [form, setForm] = useState({
        nome:'',
        email:'',
        telefone:'',
        daniversario:''

    })

    const [success, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const save = async() =>{
        try{
            const response = await fetch('/api/save',{
                method:'POST',
                body:JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
            console.log(data)
        }catch(err){
            console.log('erro', err)
        }
    }

    const onChange = evt =>{
        const value = evt.target.value 
        const key = evt.target.name 
        setForm(old =>({
            ...old,
            [key]:evt.target.value
        }))
    }

    return(
        <div className="box_cadastro">
            <div className="container">
                {!success && 
                <div className="d-flex align-items-center justify-content-center flex-column">
                    
                    <div className="mt-5" >
                        <h4>
                            Finalizar Cadastro:
                        </h4>
                    </div>
                    <div className="col-12 col-md-7 mt-3 mb-4">
                        <div className="myForm">
                            <div className="mt-4 mb-4">
                                <label htmlFor="name">Nome:</label>
                                <div className="input-group mt-2">
                                    <input type="text" name="nome" onChange={onChange} className="form-control" placeholder="Informe seu nome e sobre nome" autoComplete="off" />
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <label htmlFor="name">Email:</label>
                                <div className="input-group mt-2">
                                    <input type="email" name="email" onChange={onChange} className="form-control" placeholder="Informe seu email" autoComplete="off" />
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <label htmlFor="name">Telefone WhatsApp:</label>
                                <div className="input-group mt-2">
                                    <input type="text" name="telefone" onChange={onChange} className="form-control" maxLength="11" placeholder="Informe seu Telefone" autoComplete="off" />
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <label htmlFor="name">Data de Aniversário</label>
                                <div className="input-group mt-2">
                                    <input type="date" name="daniversario" onChange={onChange} className="form-control" autoComplete="off" />
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <button type="button" onClick={save} className="btn_yellow col-12 col-md-12" >Cadastrar</button>
                            </div>
                        </div> 
                        {JSON.stringify(form, null, 2)} 
                    </div>
                </div>
                }
                
                {
                    retorno.Nome &&
                    <div className="main_cadastro">
                        <p>
                        {JSON.stringify(retorno)}
                        </p>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Cadastro