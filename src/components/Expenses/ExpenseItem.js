import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  // 1. useState called directly inside component - neither nested in subfn or outside component
  // 2. use arr destructuring to capture 2 elements - var holding new state and function to change
  // 3. see below for 1st example!
  // 3a. title = variable holding title
  // 3b. setTitle = function used to set title
  // update: removed useState bc button was for DEMO useState.
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
          <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}
            </div>
          </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
