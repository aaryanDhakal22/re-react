import React from "react";
import "./card-list.styles.css"
import Card from '../card/card.component'
interface Monster{
    name :string;
    id : number;
    email:string;
  }
interface MonsterList{
    monsters:Monster[]
}

const CardList= (props:MonsterList)=>{
    return(
        <div className="card-list">
            {
          props.monsters.map((item:Monster)=>{
            return <Card name={item.name} id={item.id} email={item.email}/>
          })
        }
        </div>
    )
}
export default CardList