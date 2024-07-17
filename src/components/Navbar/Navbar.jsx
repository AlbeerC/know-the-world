import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar () {

    return (
        <header>
            <img src="/globe.png" alt="" />
            <h1><Link to='/'>Know the world</Link></h1>
        </header>
    )
}

export default Navbar