import React, { useEffect, useState } from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { Main, CardRestaurant, InputSearch, Menu, BoxInputSearch, MenuItem } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../Constants/url'
import CardsRestaurants from "../../Components/CardsRestaurants/CardsRestaurants";
import Header from "../../Components/Header/Header";
import MenuFooter from "../../Components/MenuFooter/MenuFooter";
import Order from "../../Components/Order/Order";
import { useGlobal } from "../../Context/Global/GlobalStateContext"




const Feed = () => {
    useProtectedPage()
    const { setters, states } = useGlobal()
    const { setOrder } = setters
    const { order } = states

    const [restaurants, setRestaurants] = useState([])
    const [inputText, setInputText] = useState("")
    const [categoryRestaurants, setCategoryRestaurants] = useState([])
    const [valueCategory, setValueCategory] = useState('')

    const getRestaurants = async () => {
        const token = localStorage.getItem('token')
        await axios
            .get(`${BASE_URL}/restaurants`, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setRestaurants(res.data.restaurants)
                filterCategory(res.data.restaurants)
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
    };
    const getOrder = async () => {
        const token = localStorage.getItem('token')
        await axios
            .get(`${BASE_URL}/active-order`, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                const expirateAt = res.data.order.expiresAt
                setOrder(res.data.order)
                setTimeout(() => {
                    getOrder()
                }, expirateAt - new Date().getTime())
                console.log( expirateAt - new Date().getTime())
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
    };
    useEffect(() => {
        getRestaurants()
        getOrder()
    }, []);

    const filterCategory = (restaurants) => {
        const arrayAux = []
        restaurants && restaurants.map((res) => {
            arrayAux.push(res.category)
        })
        const outroArray = [...new Set(arrayAux)]
        const changeObjectArray = []
        outroArray.map((category) => {
            const insertObj = { category, select: false }
            changeObjectArray.push(insertObj)
        })

        setCategoryRestaurants(changeObjectArray)
    };


    const filterRestaurant = restaurants.filter((restaurant) =>
        inputText ? restaurant.name.toLowerCase().includes(inputText.toLocaleLowerCase()) : true
    ).filter((restaurant) =>
        valueCategory ? restaurant.category.toLowerCase().includes(valueCategory.toLowerCase()) : true
    ).map((restaurant) => {
        return <CardsRestaurants
            key={restaurant.id} restaurant={restaurant}
        />
    });

    const changeCategory = (category) => {
        setValueCategory(category)
        const result = categoryRestaurants.map((cat) => {
            if (cat.category === category) {
                return { ...cat, select: true }
            } else {
                return { ...cat, select: false }
            }

        })
        setCategoryRestaurants(result)
    }



    return (
        <Main>

            <Header back={false} tittle={'Ifuture'} />

            <BoxInputSearch>
                <InputSearch
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}

                />
            </BoxInputSearch>
            <Menu>
                <MenuItem
                    onClick={() => changeCategory('')}
                    select={true}
                >
                    Todos
                </MenuItem>
                {categoryRestaurants.map((category) => {
                    return <MenuItem
                        onClick={() => changeCategory(category.category)}
                        select={category.select}
                    >
                        {category.category}
                    </MenuItem>
                })}



            </Menu >
            <CardRestaurant>
                {filterRestaurant}
            </CardRestaurant>
            {order.length > 0 ? <Order key={order.id} restaurantName={order.restaurantName} totalPrice={order.totalPrice}  /> : ""}
            <MenuFooter page={"feed"} />
        </Main>

    )


}
export default Feed