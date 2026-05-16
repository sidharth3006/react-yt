function Card(props){
    return (
        <div className="card">
            <h3>Name : {props.name}</h3> 
            <h4>Age :{props.age}</h4> 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed repellendus nihil natus! Recusandae unde veritatis, fugit placeat, dignissimos doloribus ipsum repellendus mollitia quisquam natus ipsa quos, magni asperiores esse sequi?</p>
        </div>
    )
}

export default Card