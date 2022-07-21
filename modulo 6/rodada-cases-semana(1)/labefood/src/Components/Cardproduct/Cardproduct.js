import React from "react"
import { BoxInform, BoxInformPriceButton, BoxNameQuantity, ContainerCardProduct, ImageProduct, InformButton, InformDescription, InformPrice, NameProduct } from "./styled"


const CardProduct = ({ product }) => {
    return (
        <ContainerCardProduct>
            <ImageProduct src={product.photoUrl && product.photoUrl} />
            <BoxInform>
                <BoxNameQuantity>
                    <NameProduct>{product && product.name}</NameProduct>
                </BoxNameQuantity>
                <InformDescription>
                    {product && product.description}
                </InformDescription>
                <BoxInformPriceButton>
                    <InformPrice>
                        {product.price}
                    </InformPrice>
                    <InformButton>
                        Adicionar
                    </InformButton>
                </BoxInformPriceButton>
            </BoxInform>
        </ContainerCardProduct>
    )

}
export default CardProduct