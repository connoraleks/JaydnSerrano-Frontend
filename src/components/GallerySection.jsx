import PhotoAlbum from "react-photo-album";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from './CustomAccordion';
const GallerySection = ({galleryref, directory}) => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        console.log(panel);
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div ref={galleryref} className="h-fit text-white my-4">
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
                            {/* GallerySection for this layer */}
                            <GallerySection directory={section}></GallerySection>
                            {/* PhotoAlbum for this layer */}
                            <PhotoAlbum
                                photos={section.photos}
                                layout='rows'
                                targetRowHeight={350}
                                margin={2}
                                onClick={ (photo) => {
                                    // open link in new tab
                                    window.open(photo.currentTarget.src, '_blank');
                                }}
                            />
                        </AccordionDetails>
                    </Accordion>
                )
            } )}
        </div>
    );
}

export default GallerySection;