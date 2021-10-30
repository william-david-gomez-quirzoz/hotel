import { makeStyles } from '@mui/styles'

const useHotelCard = makeStyles({
    container: {
        display: 'flex',
        maxHeight: 200,
        maxWidth: 700,
        marginTop: 5,
        marginLeft: 5,
    },
    image: {
        width: 150,
        height: 150,
        marginTop: 15,
    },
    cardContent: {
        width: 500,
        display: 'flex',
        flexWrap: 'wrap',
    },
    title: {
        flexGrow: 1,
    },
    descripttion: {
        overflow: 'hidden',
        whiteSpace: 'pre',
        textOverflow: 'ellipsis',
    },
})

export default useHotelCard
