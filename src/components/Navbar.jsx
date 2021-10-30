import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'

const Navbar = ({ value, option, check, favoriteHotels }) => {
    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation showLabels value={value} onChange={(event, newValue) => option(newValue)}>
                <BottomNavigationAction label="All" />

                <BottomNavigationAction label="Favorites" onClick={() => favoriteHotels(check)}/>
            </BottomNavigation>
        </Box>
    )
}

export default Navbar
