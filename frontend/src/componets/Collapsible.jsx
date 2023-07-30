import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Collapsible({ unit }) {
  return (
    <div  className="my-2  md:w-[100%] md:max-w-[80%] w-[100%]">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="md:h-[80px] h-14"
        >
          <Typography>
            {" "}
            <h1>{unit.title}</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              href={unit.link}
              className="hover:text-red-500 font-black  text-md"
            >
              View 
            </a>
            <br />
            <p className="text-sm">
           This is the description. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
