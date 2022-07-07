import React,{Component} from 'react';
import './card.styles.css'
import {Monster} from "../../gInterface.js"

interface CardProp extends Monster{
    name:string
    email:string
    id:number
}

const Card = ({name,email,id}:CardProp) =>{
    return <div className='card-container' key={id}>
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
        {name} <p>{email}</p> 
        </div>
}

export default Card;