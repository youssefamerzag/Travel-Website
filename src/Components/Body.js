import Data from './Daja.json'
import "./Body.css"
function Body() {
    return(
        <div>
            <p className='popular'>The Must Popular</p>
            <div className='posts'>
                {Data.map((posts) => 
                    <div id='post'>
                        <img className='img' src={posts.source} width={'450px'}/>
                        <p className='price'>{posts.price}</p>
                        <p className='postTitle'>{posts.title}</p>
                        <p className='postTime'>{posts.time}</p>
                        <div className='postRating'>
                            <p>{posts.reviews}</p>
                            <img  width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FAB005/star--v1.png" alt="star--v1"/>
                        </div>
                        <button>View Details</button>
                    </div>
                )}
            </div>
        </div>
    )
}export default Body;