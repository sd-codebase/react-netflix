import './featured.scss';
import { PlayArrow, InfoOutlined } from "@material-ui/icons";

const Featured = ({type}) => {
  return (
    <div className="featured">
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=5&w=250" alt="" 
        className='poster'/>
        
        {type && (
            <div className="category">
                <span className='type'>{type}</span>
                <select name="" id="">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}

        <div className="info">
            
            <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" className="title" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex cumque consectetur explicabo aspernatur necessitatibus, sint consequatur quia, totam nam mollitia soluta molestiae natus, nisi ratione nihil tempore corporis minus.
            </span>
            <div className="actions">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured