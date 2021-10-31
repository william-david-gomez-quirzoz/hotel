import { Send } from '@mui/icons-material'
import { Card, CardContent, IconButton, Rating, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import useReview from '../themes/useReview'

// Filter reviews by hotel id
const hotelReview = (id, review) => {
    let hotel = []

    review.forEach((val) => {
        if (val.hotelId === parseInt(id)) {
            hotel.push(val)
        }
    })

    return hotel
}

const Reviews = ({ id, review, send }) => {
    const hotel = hotelReview(id, review)

    const classes = useReview()

    const [rating, setRating] = useState(0)

    const [description, setDescription] = useState('')

    const [title, setTitle] = useState('')

    const sendReview = () => {
        const randomId = Math.random()

        const data = {
            id: randomId,
            hotelId: parseInt(id),
            title: title,
            rating: rating,
            description: description,
        }

        if (title !== '' && description !== '' && rating > 0) {
            send(data)

            setTitle('')

            setDescription('')

            setRating(0)
        }
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.inputContainer}>
                <Rating className={classes.rating} name="simple-controlled" value={rating} onChange={(event, newValue) => setRating(newValue)} />

                <TextField id="input-with-icon-textfield" label="Title" variant="standard" value={title} onChange={(e) => setTitle(e.target.value)} />

                <TextField className={classes.input} id="input-with-icon-textfield" label="Description" variant="standard" value={description} onChange={(e) => setDescription(e.target.value)} />

                <IconButton className={classes.send} position="start" onClick={sendReview}>
                    <Send />
                </IconButton>
            </Box>

            <Box>
                {hotel.map((val) => (
                    <Card key={val.id} className={classes.cardContainer}>
                        <Box>
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.title} variant="h5" component="div">
                                    {val.title}
                                </Typography>

                                <Rating readOnly value={parseInt(val.rating, 10)} />

                                <Typography variant="body2" component="p" color="text.secondary" width="100%">
                                    {val.description}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default Reviews
