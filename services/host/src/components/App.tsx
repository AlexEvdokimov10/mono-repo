import {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import {adminRoutes} from '@packages/shared/src/routes/admin'
import {shopRoutes} from '@packages/shared/src/routes/shop'

const App = () => {
    const [count, setCount] = useState(0)
   


    return (
        <div data-testId={'App.DataTestId'} id='root'>
            <h1>PAGE</h1>
            <Link to={adminRoutes.about}>About</Link>
            <Link to={shopRoutes.main}>Shop</Link>
            <Outlet/>
        </div>
    )
}

export default App