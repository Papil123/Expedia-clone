import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GoingTo from "./GoingTo";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "40%", margin: "auto", justifyContent: "space-around" }}>
      <Box sx={{ margin: "auto" }}>
        <Tabs
          style={{ margin: "auto" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Stays" {...a11yProps(0)} />
          <Tab label="Flights" {...a11yProps(1)} />
          <Tab label="Cars" {...a11yProps(2)} />
          <Tab label="Packages" {...a11yProps(3)} />
          <Tab label="Things to do" {...a11yProps(4)} />
        </Tabs>
        <hr style={{position: 'absolute', width: '90%',marginLeft: '-280px',marginTop:"-1px"}}/>
      </Box>
    
      <TabPanel value={value} index={0}>
     
      </TabPanel>
      <TabPanel value={value} index={1}>
       
      </TabPanel>
      <TabPanel value={value} index={2}>
    
      </TabPanel>
      <TabPanel value={value} index={3}>
        
        </TabPanel>
        <TabPanel value={value} index={4}>
       
        </TabPanel>
    </Box>
  );
};

export default BasicTabs;
