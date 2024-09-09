import {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import {deepMerge} from "@packages/shared/src/utils/deepMerge"

import {CardUser} from "@packages/shared/src/components/CardUser"


const App = () => {
    const [count, setCount] = useState(0)
   

    deepMerge()

    return (
        <div data-testId={'App.DataTestId'} id='root'>
            <h1>PAGE ADMIN PANEL</h1>
            <Outlet></Outlet>
            <CardUser username={'FROM ADMIN'}/>
        </div>
    )
}

export default App