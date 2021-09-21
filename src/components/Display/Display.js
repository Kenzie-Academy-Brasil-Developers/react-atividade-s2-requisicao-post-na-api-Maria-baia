function Display({result}){
    if(result === false){
        return(
            <span>Requisição Falhou!</span>
        )
    }else if(result === true){
        return(
            <span>Requisição Completa!</span>
        )
    }else{
        return(
            <span></span>
        )
    }
}

export default Display