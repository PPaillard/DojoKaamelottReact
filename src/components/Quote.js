import React from 'react'
import like from '../assets/icons/like.png'
import dislike from '../assets/icons/dislike.png'

const Quote = ({author, quote, season, episode}) => {
   const[countLike,setCountLike] = React.useState(0)
   const[countDislike,setCountDislike] = React.useState(0)
  return (
    <li>
      <div>
         Author : {author}<br />
         quote : {quote}<br />
         season : {season}<br />
         episode : {episode}<br />
         <p>
         <img onClick={()=>setCountLike(countLike + 1)} src={like} alt="J'aime"  height="20px"/>
         J'aime : {countLike}; &nbsp;&nbsp;
         <img onClick={()=>setCountDislike(countDislike + 1)} src={dislike} alt="Je n'aime pas"  height="20px"/>
         Je n'aime pas : {countDislike}; &nbsp;
         </p>
      </div>
    </li>
  )
}

export default Quote