import React from "react";
import { useNavigate } from "react-router-dom";
import MessageCard from "../../components/MessageCard";
import * as C from './styles'
import success from '../../assets/images/compra-realizada.png'

const PurchaseConclusion = () => {

    const navigate = useNavigate()

    return (
        <C.Container>
            <MessageCard 
            btnText="Voltar"
            message="Compra realizada com sucesso!"
            divider={false}
            image={success}
            onBtnClick={()=>{
              navigate('/')
            }}
            />
        </C.Container>
    )
}

export default PurchaseConclusion