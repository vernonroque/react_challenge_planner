import React from "react";

export const Tile = (props) => {
   const objectArr = Object.values(props.contact);
   console.log(objectArr[3]);
  return (
    <div className="tile-container">
     <p key = {props.index} className ='tile-title'>{objectArr[0]}</p>
     <p key = {props.index} className ='tile'>{objectArr[1]}</p>
     <p key = {props.index} className ='tile'>{objectArr[2]}</p>
     <p key = {props.index} className ='tile'>{objectArr[3]}</p>
    </div>
  );
};
