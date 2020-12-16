import React from 'react';
import Card from './storeCard';

const CardList = ({store}) => {
const cardComponent = store.map((user ,i) => {
    return( <Card 
      key={i} 
      id={ store[i].id} 
      name={store[i].name} 
      email={store[i].email}
    />
    );  
  })
  return( 
    <div>
      {cardComponent} 
    </div>
  );
}

export default CardList;