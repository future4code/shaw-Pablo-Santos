import React from 'react'
import { Button } from '@mui/material'
import { Main, CardComponent, ImageCart, InfoCard,NameAndAmount } from './styled'

const CardCart = (props) => {
    return (
        <Main>
            <CardComponent>
                <ImageCart src={props.photoUrl} />
            </CardComponent>
            <InfoCard>
                <NameAndAmount>
                    <p>{props.name}</p>
                    <p>{props.amount}</p>
                </NameAndAmount>
                <div>
                    <p>{props.description}</p>
                </div>
                <div>
                    <p>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(props.price)}
                    </p>
                    <Button>Remover</Button>
                </div>
            </InfoCard>

        </Main>
    )

}
export default CardCart