import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import imgHtml from '../Images/640px-HTML5_logo_and_wordmark.svg.png';
import imgCss from '../Images/CSS3_logo_and_wordmark.svg.png';
import imgJs from '../Images/1200px-Javascript-shield.svg.png';
import imgReact from '../Images/React_logo_wordmark.png';

export default function FrontEnd() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="HTML" value="1" />
            <Tab label="CSS" value="2" />
            <Tab label="JAVASCRIPT" value="3" />
            <Tab label="REACT JS" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="tab-panel">
            <img src={imgHtml} alt="" />
            <p>
              The HyperText Markup Language, or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
              It can be assisted by technologies such as Cascading Style Sheets
              and scripting languages such as JavaScript.
            </p>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="tab-panel">
            <img src={imgCss} alt="" />
            <p>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML. CSS is a cornerstone technology of the
              World Wide Web, alongside HTML and JavaScript.
            </p>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className="tab-panel">
            <img src={imgJs} alt="" />
            <p>
              JavaScript, often abbreviated JS, is a programming language that
              is one of the core technologies of the World Wide Web, alongside
              HTML and CSS. Over 97% of websites use JavaScript on the client
              side for web page behavior, often incorporating third-party
              libraries.
            </p>
          </div>
        </TabPanel>
        <TabPanel value="4">
          <div className="tab-panel">
            <img src={imgReact} alt="" />
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
              React can be used as a base in the development of single-page or
              mobile applications.
            </p>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
