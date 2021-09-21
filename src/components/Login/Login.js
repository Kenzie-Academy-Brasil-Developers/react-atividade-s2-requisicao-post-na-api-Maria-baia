import * as yup from 'yup'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios"
import { useHistory } from 'react-router'
import Display from '../Display/Display'
import { useState } from 'react'

function Login(){
    const history = useHistory()
    const [result, setResult] = useState()

    const formSchema = yup.object().shape({
        username: yup.string().required("Requisição Falhou!"),
        password: yup.string().required("Requisição Falhou!"),
    })

    const {register, handleSubmit, formState:{errors}, setError} = useForm(
        {resolver: yupResolver(formSchema)}
    )

    const handleForm = (formData) => {
        axios.post('https://kenzieshop.herokuapp.com/sessions/', formData)
        .then(res => setResult(true))
        .catch(err => setResult(false))
    }

    return(
        <form onSubmit={handleSubmit(handleForm)}>
            <input placeholder="User name" {...register("username")}/>
            <input type='password' placeholder="Senha" {...register("password")} />
            <button>Login{" "}</button>
            {errors.username?.message || errors.password?.message}
            <Display result={result}/>
        </form>
    )
}

export default Login