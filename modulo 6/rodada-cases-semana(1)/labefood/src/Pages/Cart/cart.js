import React, { useState } from "react";
import { Main, MainCart, CartConfig, InfoProfile, InfoRestaurant, CartInfo, EmptyCart, Payment, Freight, Total, Form } from './styled'
import { useRequestData } from '../../Hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Constants/url'
import CardCart from '../../Components/CardCart/CardCart'
import Header from '../../Components/Header/Header'
import MenuFooter from "../../Components/MenuFooter/MenuFooter";


const Cart = () => {
    const profile = useRequestData({}, `${BASE_URL}/profile`)
    const order = useRequestData({}, `${BASE_URL}/orders/history`)
    const navigate = useNavigate()

    const [payment, setPayment] = useState([])
    const [paymentMethod, setPaymentMethod] = useState({
        'money': false,
        'creditcard': false
    })


    const onChangePayment = (event) => {
        const newCheck = { ...paymentMethod }
        newCheck[event.target.name] = event.target.checked
        const result = Object.keys(newCheck).filter((pay) => {
            if (newCheck[pay]) {
                return [pay, ...payment]
            }
        })
        setPayment(result)
        setPaymentMethod(newCheck)
    }

    const mockData = [{
        name: 'seila',
        price: 40,
        photoUrl: "https://www.bing.com/th?id=AMMS_b9ee8c1f3ae2aaea8f5251ecaf7aab47&w=367&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1",
        amount: 2,
        description: "pao, ovo , queijo e batata"
    }]

    return (
        <Main>
            <Header tittle={'Meu carrinho'}/>
            <CartConfig>
                <InfoProfile>
                    <p>Endereço de entrega</p>
                    <p>{profile[0].user && profile[0].user.address}</p>
                </InfoProfile>

                <InfoRestaurant>
                    <p>Nome do restaurante</p>
                    <p>Rua do restaurante</p>
                    <p>30 - 45 min</p>
                </InfoRestaurant>

                <CartInfo>
                              {
                        mockData.length > 0 ? mockData.map((data) => {
                            return (
                                <CardCart
                                    name={data.name}
                                    price={data.price}
                                    photoUrl={data.photoUrl}
                                    amount={data.amount}
                                    description={data.description}
                                />
                            )

                        }) : <EmptyCart>Carrinho vazio</EmptyCart>

                    }
 

                </CartInfo>
                <Payment>
                    <Freight>Frete{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(6)}
                    </Freight>
                    <Total>
                        <p>SubTotal</p>
                        <p>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(50)}</p>

                    </Total>
                    <h1>Forma de Pagemento</h1>
                    <hr />
                    <Form>
                        {
                            Object.keys(paymentMethod).map((key) => {
                                const checked = paymentMethod[key]
                                return (
                                    <div>
                                        <input
                                            checked={checked}
                                            name={key}
                                            id={key}
                                            type={'checkbox'}
                                            onChange={onChangePayment}
                                        />
                                        <label>{key}</label>
                                    </div>
                                )
                            })
                        }
                    </Form>
                </Payment>
            </CartConfig>
            <MenuFooter page={"cart"}/>
        </Main>

    )


}
export default Cart