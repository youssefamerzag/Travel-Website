import Data from './Daja.json'
import "./Body.css"
import japan from  './imgs/japan.jpg'
import maldives from  './imgs/Maldives.jpg'
import italy from  './imgs/italy.jpg'
import uk from  './imgs/United Kingdom.jpg'
import australia from  './imgs/Australia.jpg'
import iceland from  './imgs/Iceland.jpg'
import { useState } from 'react'
function Body() {
    const [value , setvalue] = useState(true)
    const [post , setPost] = useState()
    const [reserve , setReserve] = useState(true)
    const [members , setMembers] = useState()
    const [total , settotal] = useState()
    function click (id) {
        setvalue(false)
        setPost(Data[id].id)
        console.log(post);
    }

    function back () {
        setvalue(true)
    }

    function membersinp (e) {
        setMembers(e.target.value)
    }

    function reservebtn () {
        setReserve(false)
    }

    function result() {
        settotal(Data[post].price * members);
    }
    return(
        <div>
            {value === true ?
            <div>
                <p className='popular'>The Must Popular</p>
                <div className='posts'>
                    {Data.map((posts , index) => 
                        <div id={posts.id} key={index} className='post'>
                            <img className='img' src={process.env.PUBLIC_URL + posts.source} width={'450px'}/>
                            <p className='price'>${posts.price}</p>
                            <p className='postTitle'>{posts.title}</p>
                            <p className='postTime'>{posts.time}</p>
                            <div className='postRating'>
                                <p>{posts.reviews}</p>
                                <img  width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FAB005/star--v1.png" alt="star--v1"/>
                            </div>
                            <button onClick={() =>click(posts.id)}>View Details</button>
                        </div>
                    )}
                </div> 
            </div>
            :
            <div>
                <button className='back' onClick={back}>Back</button>
                <div className='postview'>
                    <img className='viewimg' src={process.env.PUBLIC_URL + Data[post].source} width={'800px'}/>
                    <div className='postinfo'>
                        <p className='viewtitle'>{Data[post].title}</p>
                        <div className='viewRating'>
                            <p>{Data[post].reviews}</p>
                            <img  width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FAB005/star--v1.png" alt="star--v1"/>
                        </div>
                        <p className='viewtime'>{Data[post].time}</p>
                        <p className='viewprice'>${Data[post].price}</p>
                        <p className='viewdescription'>{Data[post].description}</p>
                        <button className='reservebtn' onClick={() =>reservebtn(Data[post].id)}>Reserve</button>
                    </div>
                </div>
                <div className='reserve'>
                {reserve === true ? ""
                        : 
                        <div>
                            <p className='members'>Members :</p>
                            <input className='membersinp' type='number' placeholder='enter how many' members onChange={membersinp}></input>
                            <button className='resultbtn' onClick={result}>result</button>
                            <p className='total'>Total is :${total}</p>
                        </div>
                        }
                </div>
            </div>
            }
        </div>
    )
}export default Body;