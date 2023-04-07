
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Collapsible({unit}) {
  return (
    <div style={{width:'1150px' }} className="my-2" >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{height:'80px'}}
        >
          <Typography> <h1>{unit.title}</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href={unit.link} className="hover:text-red-500 font-black text-md">View Notes</a><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
