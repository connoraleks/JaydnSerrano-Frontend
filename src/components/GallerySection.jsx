import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";

import sections from "./Photos";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from './CustomAccordion';
const GallerySection = ({gallery}) => {
    const [galleryReadySections, setGalleryReadySections] = useState(null);
    sections.then(response => {
        let galleryReady = {};
        if(response.data.success) {
          galleryReady = response.data.response
        } else{
          console.log("Error: " + response.data.response)
          console.log(response.data)
        }
        setGalleryReadySections(galleryReady);
      })
    useEffect(() => {
        if(galleryReadySections) {
            console.log(galleryReadySections)
        }
    }, [galleryReadySections])
    return (
        <div ref={gallery} className="h-fit text-white my-4">
            {/* Create an accordion for each section in sections */}
            {/* Inform the user if loading is happening */}
            {galleryReadySections ?
                Object.keys(galleryReadySections).map(section => {
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
                        <PhotoAlbum
                            photos={galleryReadySections[section]}
                            layout="rows"
                            targetRowHeight={350}
                        />
                        </AccordionDetails>
                    </Accordion>
                )
            }
            ) : <Typography variant="h6">Loading...</Typography>}
        </div>
    );
}

export default GallerySection;