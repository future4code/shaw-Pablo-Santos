import React, { useEffect, useState } from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { Main, CardRestaurant, InputSearch, Menu, BoxInputSearch, MenuItem } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../Constants/url'
import CardsRestaurants from "../../Components/CardsRestaurants/CardsRestaurants";
import Header from "../../Components/Header/CardHeader";




const Feed = () => {
    useProtectedPage()

    const [restaurants, setRestaurants] = useState([])
    const [inputText, setInputText] = useState("")
    const [categoryRestaurants, setCategoryRestaurants] = useState([])
    const [valueCategory, setValueCategory] = useState('')

    console.log(valueCategory)

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
    useEffect(() => {
        getRestaurants()
    }, []);

    const filterCategory = (restaurants) => {
        const arrayAux = []
        restaurants && restaurants.map((res) => {
            arrayAux.push(res.category)
        })
        const outroArray = [...new Set(arrayAux)]
        setCategoryRestaurants(outroArray)
    };


    const filterRestaurant = restaurants.filter((restaurant) =>
        inputText ? restaurant.name.toLowerCase().includes(inputText.toLocaleLowerCase()) : true
    ).filter((restaurant) =>
        valueCategory ? restaurant.category.toLowerCase().includes(valueCategory.toLowerCase()) : true
    ).map((restaurant) => {
        return <CardsRestaurants
            restaurant={restaurant}
        />
    });



    return (
        <Main>

            <Header tittle={'Ifuture'} />

            <BoxInputSearch>
                <InputSearch
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}

                />
            </BoxInputSearch>
            <Menu>
                <MenuItem
                    onClick={() => setValueCategory('')}
                    select={true}
                >
                    Todos
                </MenuItem>
                {categoryRestaurants.map((category) => {
                    return <MenuItem
                        onClick={() => setValueCategory(category)}
                        select={true}
                    >
                        {category}
                    </MenuItem>
                })}



            </Menu>
            <CardRestaurant>
                {filterRestaurant}
            </CardRestaurant>
        </Main>

    )


}
export default Feed