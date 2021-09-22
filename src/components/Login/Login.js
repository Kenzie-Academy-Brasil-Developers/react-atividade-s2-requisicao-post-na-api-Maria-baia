import * as yup from 'yup'
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import axios from "axios"
import Display from '../Display/Display'
import { useState } from 'react'

function Login(){
    const [result, setResult] = useState()

    const formSchema = yup.object().shape({
        username: yup.string().required("User name não informado."),
        password: yup.string().required("Senha não informada."),
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
            {errors.username?.message}
            <input type='password' placeholder="Senha" {...register("password")} />
            {errors.password?.message}
            <button>Login{" "}</button>
            <Display result={result}/>
        </form>
    )
}

export default Login