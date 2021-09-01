import React, { useState } from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2/dist/sweetalert2'
import '../node_modules/sweetalert2/dist/sweetalert2.min.css'

const Cadastro = () =>{

    const [form, setForm] = useState({
        nome:'',
        email:'',
        telefone:'',
        daniversario:''

    })

    const [success, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const nome = form.nome
    const email = form.email
    const telefone = form.telefone

    const save = async() =>{
        try{

            if(!nome && nome === ''){
                console.log('Erro')
                Swal.fire({
                    icon:'error',
                    title:'Erro ao cadastrar',
                    html:`Para cadastrar preencha todos os campos!`
                })
                return false;
            }
            if(!email && email === ''){
                console.log('Erro')
                Swal.fire({
                    icon:'error',
                    title:'Erro ao cadastrar',
                    html:`Para cadastrar preencha todos os campos!`
                })
                return false;
            }
            if(!telefone && telefone === ''){
                console.log('Erro')
                Swal.fire({
                    icon:'error',
                    title:'Erro ao cadastrar',
                    html:`Para cadastrar preencha todos os campos!`
                })
                return false;
            }

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
                         
                    </div>
                </div>
                }
                
                {
                    retorno.Nome &&
                    <div className="main_cadastro">
                        <div className="container">
                            <div className="d-flex algin-items-center flex-column">
                                <p>{`Olá ${JSON.stringify(retorno.Nome).replace(/["]/gm,'')} você foi cadastrado!`} <br/>
                                Entraremos em contato em breve.</p>
                                <div className="col-12 col-md-4 mt-4 mb-4 m-auto">
                                <div className="d-flex align-items-center justify-content-center text-center">

                                    <Link href="/">
                                        <a className="btn_yellow col-12 col-md-12" >Voltar para o início</a>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Cadastro