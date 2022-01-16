import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';
import img from '../Images/Wikipedia-logo-v2.svg.png';

export default function LabTabs() {
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <NavLink to="/">
          <img src={img} alt="HOME" className="logo" />
        </NavLink>
        <NavLink to="/FrontEnd" className='tab-item'>
          <Tab label="Front End" />
        </NavLink>
        <NavLink to="/BackEnd" className='tab-item'>
          <Tab label="Back End" />
        </NavLink>
      </Box>
    </Box>
  );
}
