import logo from './assets/images/react-logo.png'
function Navbar(){
    return (
        <nav className='nav'>
            <img src= {logo} alt="react-logo" className='nav-logo'/>
            <h1 className='nav-logo-name'>ReactFacts</h1>
            <h3 className='nav-title'>React Course - Project 1</h3>
        </nav>
    );
}
export default Navbar;