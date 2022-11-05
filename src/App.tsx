/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import { ShoppingList } from './components/ShoppingList';
import { Recipe } from './components/Recipe';
import { ShoppingListManager } from './lib/useIngredients';

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  padding: 10px;
  border: 1px solid red;
`;

export const App = () => {
    return (
        <div>
            <ShoppingListManager>
                <Flex>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <h2>APP Shopping list</h2>
                    </div>
                    <Box>
                        <ShoppingList />
                    </Box>
                    <Box>
                        <Recipe />
                    </Box>
                </Flex>
            </ShoppingListManager>
        </div>
    );
};