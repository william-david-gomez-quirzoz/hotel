import { useEffect, useState, useContext } from 'react'
import { Box } from '@mui/material'
import Navbar from './Navbar'
import HotelCard from './HotelCard'
import hotelContext from './context/hotelContext'
import api from '../api/api'
import useHotelList from '../themes/useHotelList'

const HotelList = () => {
    const classes = useHotelList()

    const [hotels, setHotels] = useState([])

    const {check, setCheck} = useContext(hotelContext)
    
    const [likeHotels, setLikeHotels] = useState([])

    const [value, setValue] = useState(0)
    
    useEffect(() => {
        const request = async () => {
            const data = await api.get('hotels')

            setHotels(data.data)
        }

        request()
    }, [])

    const favoriteHotels = (id) => {
        const currentIndex = check.indexOf(id)

        const newChecked = [...check]

        if (currentIndex === -1) {
            newChecked.push(id)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setCheck(newChecked)

        favoriteList(newChecked)
    }

    const navigation = (val) => setValue(val)

    const favoriteList = (newChecked) => {
        const newHotelList = []

        hotels.forEach((val) => {
            if (newChecked.indexOf(val.id) !== -1) {
                newHotelList.push(val)
            }
        })

        setLikeHotels(newHotelList)
    }

    return (
        <Box className={classes.container}>
                <Navbar value={value} option={navigation} check={check} favoriteHotels={favoriteHotels} />

           
            {
                value === 0 ? 
                <HotelCard HotelList={hotels} favoriteHotels={favoriteHotels} like={check} /> 
                : 
                <HotelCard HotelList={likeHotels} favoriteHotels={favoriteHotels} like={check} />
            }   
        </Box>
    )
}

export default HotelList
