import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HotelInf from '../pages/HotelInf'
import Hotels from '../pages/Hotels'
import NotFound from '../pages/NotFound'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Hotels} />

                <Route exact path="/info/:id/:fv" component={HotelInf} />

                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default Routes
