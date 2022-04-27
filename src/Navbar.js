import logo from './assets/images/react-logo.png'
function Navbar(){
    return (
        <nav>
            <img src= {logo} alt="react-logo"/>
            <h1>ReactFacts</h1>
            <h3>React Course - Project 1</h3>
        </nav>
    );
}
export default Navbar;