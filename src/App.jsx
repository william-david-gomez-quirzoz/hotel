import Routes from './components/Routes'
import hotelContext from './components/context/hotelContext'
import { useState } from 'react'

function App() {
    const [listReviews, setListResview] = useState([])

    const [check, setCheck] = useState([])

    return (
        <hotelContext.Provider value={{ listReviews, setListResview, check, setCheck }}>
            <Routes />
        </hotelContext.Provider>
    )
}

export default App
