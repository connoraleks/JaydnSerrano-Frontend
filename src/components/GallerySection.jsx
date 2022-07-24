import Gallery from 'react-photo-gallery';
import sections from "./Photos";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from './CustomAccordion';
const GallerySection = ({gallery}) => {
    const [galleryReadySections, setGalleryReadySections] = useState([]);
    sections.then(response => {
        let galleryReady = {};
        if(response.data.success) {
          galleryReady = response.data.response
        } else{
          console.log("Error: " + response.data.response)
          console.log(response.data)
        }
        Object.keys(galleryReady).forEach((key) => {
            galleryReady[key].forEach((item) => {
            item.src = item.url;
            item.width = 1;
            item.height = 1;
          })
        })
        setGalleryReadySections(galleryReady);
      })
    useEffect(() => {
        console.log(galleryReadySections);
    }
    , [galleryReadySections]);


    return (
        <div ref={gallery} className="h-fit text-white my-4">
            {/* Create an accordion for each section in sections */}
            {Object.keys(galleryReadySections).map(section => {
                return (
                    <Accordion key={section}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="white"/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">{section}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Gallery photos={galleryReadySections[section]} />
                        </AccordionDetails>
                    </Accordion>
                )
            }
            )}
        </div>
    );
}

export default GallerySection;