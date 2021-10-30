import { Card, CardContent, CardMedia, Typography, Checkbox, Rating } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useHotelCard from '../themes/useHotelCard'
import { pink } from '@mui/material/colors'

const HotelSelected = ({ HotelList, like, favoriteHotels }) => {
    const classes = useHotelCard()

    return (
        <div>
            {HotelList.map((val) => (
                <Card key={val.id} className={classes.container}>
                    <CardMedia component="img" image={val.thumbnail} alt={val.title} className={classes.image} />

                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.title} variant="h5" component="div">
                            <Link to={{ pathname: `/info/${val.id}/${like.indexOf(val.id) !== -1}` }}>{val.title}</Link>
                        </Typography>

                        <Rating readOnly value={parseInt(val.rating, 10)} />

                        <Checkbox
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                                marginLeft: 7,
                                marginTop: -1,
                                marginBottom: 0,
                            }}
                            checked={like.indexOf(val.id) !== -1}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            onClick={() => favoriteHotels(val.id)}
                        />

                        <Typography variant="body2" component="p" color="text.secondary" className={classes.descripttion}>
                            {val.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default HotelSelected
