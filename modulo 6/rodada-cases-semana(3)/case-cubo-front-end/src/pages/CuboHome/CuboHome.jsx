import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/BASE_URL'
import { Header, Main, Inputs, Button, DataTitle, Section, ContainerTable, ConteinerGraphic, Table, TableHead, TableBody, ItemTable, ItemTable2, ItemTableId, ItemTableId2 } from './styled'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useForm } from '../../hooks/useForm'


const CuboHome = () => {

    const [allParticipations, setAllParticipations] = useState([])
    const [valores, setValores] = useState([])
    const [names,setNames]=useState([])
   


    const { form, onChange, clean } = useForm({
        first_name: "",
        last_name: "",
        participation: null
    })

    const getParticipations = async () => {
        await axios
            .get(`${BASE_URL}`)
            .then((res) => {
                setAllParticipations(res.data)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    const postPrevision = async () => {
        await axios
            .post(`${BASE_URL}`, form)
            .then((res) => {
                console.log(res);
                getParticipations()
                clean();
            })
            .catch((err) => {
                alert(err.response.data);
            });
    };

    const onSubimitForm = (e) => {
        e.preventDefault()
        postPrevision()
    }

    ChartJS.register(ArcElement, Tooltip, Legend);
    const dataBase = {
        hidden: false,
        labels: names,
        datasets: [
            {
                data: valores,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(0, 224, 138)',
                    'rgb(167, 32, 234)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(0, 224, 138)',
                    'rgb(167, 32, 234)'
                ],
                borderWidth: 2,
            },
        ],
    };

    useEffect(() => {
        getParticipations()
    }, [])

    useEffect(() => {
        const valoresUsers = allParticipations.map((valor) => {
            return valor.participation
        })
        setValores(valoresUsers);

        const name = allParticipations.map((valor) => {
            return valor.first_name
        })
        setNames(name);

    }, [allParticipations])

    const showPartArray = allParticipations.map((participation) => {
        return <TableBody key={participation.id}>
            <ItemTableId2 >{participation.id}</ItemTableId2>
            <ItemTable2>{participation.first_name}</ItemTable2>
            <ItemTable2>{participation.last_name}</ItemTable2>
            <ItemTable2>
                {`${((Number(participation.participation))).toFixed()}%`}
            </ItemTable2>
        </TableBody>
    });



    return (
        <>
            <Header>
                <form onSubmit={onSubimitForm}>
                    <Inputs
                        label="first_name"
                        name={"first_name"}
                        onChange={onChange}
                        placeholder='First Name'
                        value={form.first_name}
                        type="text" />
                    <Inputs
                        label="last_name"
                        name={"last_name"}
                        onChange={onChange}
                        value={form.last_name}
                        placeholder='Last Name'
                        type="text" />
                    <Inputs
                        label="participation"
                        name={"participation"}
                        onChange={onChange}
                        value={form.participation}
                        placeholder='Participation'
                        type="text" />
                    <Button type='submit'>Send</Button>

                </form>
            </Header>
            <Main>
                <DataTitle>
                    <h1>Data</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </DataTitle>
                <Section>
                    <Table>
                        <TableHead>
                            <ItemTableId></ItemTableId>
                            <ItemTable>Fist Name</ItemTable>
                            <ItemTable>Last Name</ItemTable>
                            <ItemTable>Participation</ItemTable>
                        </TableHead>
                        {showPartArray}
                    </Table>

                    <ConteinerGraphic>
                        <Doughnut data={dataBase} />
                    </ConteinerGraphic>
                </Section>
            </Main>
        </>
    )
}
export default CuboHome