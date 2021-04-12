import React, { useState } from 'react';

import styled from 'styled-components';

const GameHandler = styled.div`
  height: 150vh;
  padding: 25px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: #f1fffc;
`;

const Collection = (props) => {

  
 const {videoGames}=props;
 
    return(
      <GameHandler >
  <div className="collection-comp" style={{height:"200vh"}}>
   
        { videoGames.map ((games) => {
            <>
              
              <div className="game-container">
                <img src = {games.image} style = {{width:"100%"}}/>
                <h2>{games.name}</h2>
                <ul className="game-list">
                  <li className='collection-item'>Category: {games.category}</li>
                  <li className='collection-item'>Rating: {games.rating}</li>
                  <li className='collection-item'>Publisher: {games.publisher}</li>
                  <li className='collection-item'>Developer: {games.developer}</li>
                </ul>
              </div>
              
            </>
          })}
        
        
        </div>
        </GameHandler >
    );
}

      
        
export default Collection;
      