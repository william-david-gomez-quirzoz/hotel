import { Rating, Box, Checkbox, Typography, IconButton } from '@mui/material'
import { Favorite, FavoriteBorder, ArrowBack } from '@mui/icons-material'
import { pink } from '@mui/material/colors'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import hotelContext from '../components/context/hotelContext'
import Reviews from '../components/Reviews'
import useHotelInf from '../themes/useHotelInf'
import { Link } from 'react-router-dom'
import api from '../api/api'

const HotelInf = () => {
    const classes = useHotelInf()
    
    const { id, fv } = useParams()

    const [hotel, setHotel] = useState({})

    const [review, setReview] = useState([])

    const { listReviews, setListResview, check, setCheck } = useContext(hotelContext)
    
    const [favorite, setFavorite] = useState()

    useEffect(() => {
        const request = async () => {
            const hotelList = await api.get(`hotels/${id}`)

            const reviewList = await api.get('reviews')

            setHotel(hotelList.data)

            setReview(reviewList.data)
        }

        request()

        setFavorite(JSON.parse(fv))
    }, [id, fv])

    const addFavorite = () => {
        setFavorite(!favorite)

        const newId = parseInt(id)

        const currentIndex = check.indexOf(newId)

        const newChecked = [...check]

        if (currentIndex === -1) {
            newChecked.push(newId)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setCheck(newChecked)
    }

    const sendReview = (newReview) => setListResview([...review, newReview])

    const sendListsReviews = (newReview) => setListResview([...listReviews, newReview])

    return (
        <div>
            <div className={classes.linkContainer} >
                <Link to="/" className={classes.link} style={{ textDecoration: 'none' }}><IconButton><ArrowBack/>Go back</IconButton></Link>
            </div>

            <Box className={classes.container}>
                <Typography mb={2} className={classes.title} variant="h4">
                    {hotel.title}
                </Typography>

                <Box className={classes.image}>
                    <img src={hotel.thumbnail} alt="" />
                </Box>

                <Typography my={2} variant="subtitle2">
                    {hotel.description}
                </Typography>

                <Checkbox
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                        marginTop: -2,
                    }}
                    checked={favorite === true}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    onClick={addFavorite}
                />

                <Rating readOnly value={parseInt(hotel.rating, 10)} />
            </Box>

            {
                listReviews.length === 0? 
                <Reviews id={id} review={review} send={sendReview} />
                :
                <Reviews id={id} review={listReviews} send={sendListsReviews} />
            }
        </div>
    )
}

export default HotelInf
