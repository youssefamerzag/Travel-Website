
import './Navbar.css'
function Navbar () {
    return(
        <div className='nav'>
            <ul className="navlinks">
                <li>Home</li>
                <li>Contact us</li>
                <li>Stories</li>
                <li>Trip Planner</li>
                <li><img width="27" height="27" src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" alt="search--v1"/></li>
                <button>Login</button>
            </ul>
            <div className='headertitle'>
                <p className='title'>The Best Travel Experience</p>
                <p className='paragraph'>We Served More Than 100 Million Customers Around The Globe</p>
            </div>
        </div>
    )
}export default Navbar;