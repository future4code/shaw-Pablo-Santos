import React, { useEffect, useState } from "react";
import { Main, MainCart, CartConfig, InfoProfile, InfoRestaurant, CartInfo, EmptyCart, Payment, Freight, Total, Form, SpaceFooter } from './styled'
import { useRequestData } from '../../Hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Constants/url'
import Header from '../../Components/Header/Header'
import MenuFooter from "../../Components/MenuFooter/MenuFooter";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import CardProduct from "../../Components/Cardproduct/Cardproduct";
import { Button } from "@mui/material";
import axios from "axios";


const Cart = () => {
    const profile = useRequestData({}, `${BASE_URL}/profile`)
    const navigate = useNavigate()

    const { states, setters } = useGlobal()

    const { cart, restaurant, order } = states
    const { setOrder } = setters
    const [payment, setPayment] = useState([])
   
    const [paymentMethod] = useState(["money", "creditcard"])

    const [fullPrice, setFullPrice] = useState(0)

    const onChangePayment = (event) => {

        setPayment(event.target.value)

    }


    const totalPrice = () => {
        let totPrice = 0

            for (const product of cart) {
                totPrice += product.price * product.quantity
            }
            setFullPrice(Number(totPrice + restaurant.shipping))
      
    }
    useEffect(() => {
        totalPrice()
    }, [])

    const placeOrder = async () => {
        const body = {
            products: cart.map((product) => {
                return (
                    {
                        id: product.id,
                        quantity: product.quantity
                    }
                )
            }),
            paymentMethod: payment,

        };

        await axios
            .post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {
                headers: {
                    auth: window.localStorage.getItem('token')
                }
            })
            .then((res) => {
                setOrder(res.data.order)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    };

    const onSubmitPlaceOrder = (event) => {
        event.preventDefault()
        placeOrder()
    };

    return (

        <Main>
            <Header tittle={'Meu carrinho'} />
            <CartConfig>
                <InfoProfile>
                    <p>Endereço de entrega</p>
                    <p>{profile[0].user && profile[0].user.address}</p>
                </InfoProfile>

                <InfoRestaurant>
                    <p>{restaurant.name}</p>
                    <p>{restaurant.address}</p>
                    <p>{restaurant.deliveryTime + "min"}</p>
                </InfoRestaurant>

                <CartInfo>
                    {
                        cart.length > 0 ? cart.map((product) => {
                            return (
                                <CardProduct
                                    product={product}
                                    key={product.id}
                                    restaurant={restaurant}
                                />
                            )

                        }) : <EmptyCart>Carrinho vazio</EmptyCart>

                    }


                </CartInfo>
                <Payment>
                    <Freight>Frete{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(restaurant.shipping ? restaurant.shipping : 0)}
                    </Freight>
                    <Total>
                        <p>SubTotal</p>
                        <p>{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(fullPrice)}</p>

                    </Total>
                    <h1>Forma de Pagemento</h1>
                    <hr />
                    <Form onSubmit={onSubmitPlaceOrder}>
                        {
                            paymentMethod.map((key) => {

                                return (
                                    <div>
                                        <input
                                            checked={payment === key}
                                            name={"paymentMethod"}
                                            id={key}
                                            type={'radio'}
                                            onChange={onChangePayment}
                                            value={key}
                                        />
                                        <label htmlFor={key}>{key}</label>
                                    </div>
                                )
                            })
                        }
                        <Button type='submit'>Confimar</Button>
                    </Form>
                </Payment>
            </CartConfig>
            <MenuFooter page={"cart"} />
        </Main>


    )


}
export default Cart