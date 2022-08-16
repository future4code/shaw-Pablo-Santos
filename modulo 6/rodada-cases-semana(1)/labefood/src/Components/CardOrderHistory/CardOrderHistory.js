import React from "react";


const CardOrderHistory = ({ restaurantName, totalPrice, createdAt }) => {

    const convertDate = (timesTemp) => {
        let time = new Date(timesTemp)
        let day = time.getDate().toString().padStart(2, "0")
        let month = (time.getMonth() + 1).toString().padStart(2, "0")
        let year = time.getFullYear()
        return `${day}/${month}/${year}`
    }

    return (
        <div>
            <p>{restaurantName}</p>
            <p>{convertDate(createdAt)}</p>
            <p>Subtotal: {new Intl.NumberFormat('pt-BR',
                {
                    style: 'currency',
                    currency: 'BRL'
                })
                .format(totalPrice)}
            </p>
        </div>
    )
}
export default CardOrderHistory