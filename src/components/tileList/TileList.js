import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = (props) => {
  
  return (
    <div>
      {props.contactArr.map((contact,index) => {
        return <Tile key = {index} contact={contact}/>
        })
      }
  </div>
  )
};
