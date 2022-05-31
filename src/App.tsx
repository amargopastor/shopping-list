import React from 'react';
import { Item } from './components/Item';

export const App = () => {
  console.log('Rendering component with react...');
  return (
    <div className="item_list">
      <Item />
      <Item />
      <Item />
    </div>
  );
};
