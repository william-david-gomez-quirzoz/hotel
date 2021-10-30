import { makeStyles } from '@mui/styles'

const useReview = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingY: 5,
    },
    link: {},

    // Input styles
    inputContainer: {
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
        marginBottom: 50,
    },
    input: {
        width: 400,
    },
    rating: {
        margin: 'auto',
    },
    send: {
        position: 'relative',
        top: 30,
        left: 390,
        width: 45,
    },

    // Card Styles
    cardContainer: {
        maxHeight: 200,
        maxWidth: 700,
        marginTop: 20,
    },
    cardContent: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    title: { flexGrow: 1 },
})

export default useReview
