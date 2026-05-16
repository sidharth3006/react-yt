const Navbar = (props) => { 
    console.log(props)
    return ( 
        
        <nav className="navbar">
            <h1>{props.title}</h1> 
        </nav>
    )
}

export default Navbar