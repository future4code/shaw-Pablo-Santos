import React, { useState } from "react"
import { useGlobal } from "../../Context/Global/GlobalStateContext"
import ModalSelectQuantity from "../Modal/ModalSelectQuantity"
import {
    BoxInform,
    BoxInformPriceButton,
    BoxNameQuantity,
    ContainerCardProduct,
    ImageProduct, InformAddItemButton,
    InformRemoveItemButton,
    InformDescription,
    InformPrice,
    NameProduct,
    QuantityProduct,
} from "./styled"


const CardProduct = ({ product, restaurant }) => {

    const [showModal, setShowModal] = useState(false)

    const { requests, states } = useGlobal()
    const { addToCart, removeToCart } = requests
    const { cart } = states


    const choiceQuantity = (quantity) => {
        addToCart(product, quantity, restaurant)
        setShowModal(false)
    }

    const productInCart = cart.find((productCart) => productCart.id === product.id)


    return (
        <ContainerCardProduct>
            <ImageProduct src={product.photoUrl && product.photoUrl} />
            <BoxInform>
                <BoxNameQuantity>
                    <NameProduct>{product && product.name}</NameProduct>
                    {
                        productInCart && <QuantityProduct>{productInCart.quantity}</QuantityProduct>   
                    }
                </BoxNameQuantity>
                <InformDescription>
                    {product && product.description}
                </InformDescription>
                <BoxInformPriceButton>
                    <InformPrice>
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(product.price)}
                       
                    </InformPrice>

                    {
                        productInCart ?
                            <InformRemoveItemButton onClick={() => removeToCart(product.id)}>
                                Remover
                            </InformRemoveItemButton>
                            :
                            <InformAddItemButton onClick={() => setShowModal(true)}>
                                Adicionar
                            </InformAddItemButton>
                    }

                </BoxInformPriceButton>
                <ModalSelectQuantity
                    choiceQuantity={choiceQuantity}
                    open={showModal}
                    setOpen={setShowModal}
                />
            </BoxInform>
        </ContainerCardProduct>
    )

}
export default CardProduct