import React from 'react';
import Bubble from '../components/Bubble';
import '../styles/Dashboard.css'

import { dashboardBubbles } from '../utils/mock';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dasboard-bubbles'>
          {dashboardBubbles.map((bubble,index)=>{
            return <Bubble data={bubble} key={index} />
          })}
      </div>
    </div>
    );
};

export default Dashboard;
