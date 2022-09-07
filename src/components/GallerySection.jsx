//import PhotoAlbum from "react-photo-album";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from './CustomAccordion';
const GallerySection = ({gallery, directory}) => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        console.log(panel);
        setExpanded(isExpanded ? panel : false);
    }
    useEffect(() => {
        console.log(directory.name);
    }, [directory]);
    return (
        <div ref={gallery} className="h-fit text-white my-4">
            {/* Create an accordion for each section in directory */}
            {directory && directory.dirs.map((section) => {
                return (
                    <Accordion id={section.id} expanded={expanded === section.id} key={section.id} onChange={handleChange(section.id)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${section.name}-content`}
                            id={`${section.name}-header`}
                        >
                            <Typography><span className="font-bold text-2xl">{section.name}</span> <br/> <span className="text-slate-500">{section.photos.length+ ' photos | ' + section.dirs.length + ' subcategories'}</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* Create an accordion for each dir in section.dirs[], and then make a Gallerysections for them */}
                            <GallerySection directory={section}></GallerySection>
                            {/* Create a PhotoAlbum for each photo in section.photos[] */}
                            {section.photos.map((photo) => {
                                return (
                                    <div key={photo.id}>
                                        <h1>{photo.name}</h1>
                                    </div>
                                )
                            })}
                        </AccordionDetails>
                    </Accordion>
                )
            } )}
        </div>
    );
}

export default GallerySection;