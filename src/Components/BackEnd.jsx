import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import imgNode from '../Images/1280px-Node.js_logo.svg.png';
import imgPhp from '../Images/58481791cef1014c0b5e4994.png';
import imgPython from '../Images/Python_logo_and_wordmark.svg.png';
import imgSql from '../Images/MySQL-Logo.wine.png';

export default function BackEnd() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Node Js" value="1" />
            <Tab label="PHP" value="2" />
            <Tab label="PYTHON" value="3" />
            <Tab label="MY SQL" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="tab-panel">
            <img src={imgNode} alt="" />
            <p>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.{' '}
            </p>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="tab-panel">
            <img src={imgPhp} alt="" />
            <p>
              PHP is a general-purpose scripting language geared towards web
              development. It was originally created by Danish-Canadian
              programmer Rasmus Lerdorf in 1994. The PHP reference
              implementation is now produced by The PHP Group.
            </p>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className="tab-panel">
            <img src={imgPython} alt="" />
            <p>
              Python is an interpreted high-level general-purpose programming
              language. Its design philosophy emphasizes code readability with
              its use of significant indentation. Its language constructs as
              well as its object-oriented approach aim to help programmers write
              clear, logical code for small and large-scale projects.
            </p>
          </div>
        </TabPanel>
        <TabPanel value="4">
          <div className="tab-panel">
            <img src={imgSql} alt="" />
            <p>
              MySQL is an open-source relational database management system. Its
              name is a combination of "My", the name of co-founder Michael
              Widenius's daughter, and "SQL", the abbreviation for Structured
              Query Language.
            </p>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
