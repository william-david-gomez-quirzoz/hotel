import { makeStyles } from '@mui/styles'

const useHotelInf = makeStyles({
    container: {
        background: '#CCF2C9',
        maxWidth: 800,
        margin: 'auto',
        marginBottom: 50,
        padding: 30,
        boxShadow: '2px 1px #475946'
    },
    linkContainer: {
        maxWidth: 860,
        backgroundColor: '#94A692',
        margin: 'auto',
        marginTop: 10,
        marginBottom: 10,
        boxShadow: '2px 1px #000',
    },
    title: {
        textAlign: 'center',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export default useHotelInf
