import React from 'react'
import style from './styles/card.module.css'


const Card = ({imagePath, index, heading, content}) => {
    return (
    <div className={style.container}>
     <div className={style.image}>
         <img src={imagePath} alt='' />
     </div>
     <div className={style.text}>
         <h1>{index}</h1>
         <h2>{heading}</h2>
         <p>{content}</p>
     </div>
    </div> );
}
 
export default Card;