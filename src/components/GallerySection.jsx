import PhotoAlbum from "react-photo-album";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from './CustomAccordion';
const GallerySection = ({galleryref, directory}) => {
    const responsiveRowHeight = {
        0: 250,
        500: 350,
        1000: 450,
        1500: 550,


    };
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        console.log(panel);
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div className={galleryref != null ? "bg-white p-4" : ''}>
            <div ref={galleryref} className={galleryref != null ? "h-fit text-white py-8 border-2 border-gray-700 bg-black rounded-2xl" : "h-fit text-white bg-black"}>
                {galleryref != null && <h3 className="font-bold text-4xl w-full text-center mb-4">Gallery</h3>}
                {/* Create an accordion for each section in directory */}
                {directory && directory.folders.map((section) => {
                    return (
                        <Accordion id={section.name} expanded={expanded === section.name} key={section.name} onChange={handleChange(section.name)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${section.name}-content`}
                                id={`${section.name}-header`}
                            >
                                <Typography><span className="font-bold text-2xl">{section.name}</span> <br/> <span className="text-slate-500">{section.photos.length+ ' photos | ' + section.folders.length + ' subcategories'}</span></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* GallerySection for this layer */}
                                <GallerySection directory={section}></GallerySection>
                                {/* PhotoAlbum for this layer */}
                                <PhotoAlbum
                                    photos={section.photos}
                                    layout='rows'
                                    margin={2}
                                    targetRowHeight={(containerWidth) => {
                                        if (containerWidth < 500) {
                                            return responsiveRowHeight[0];
                                        } else if (containerWidth < 1000) {
                                            return responsiveRowHeight[500];
                                        } else if (containerWidth < 1500) {
                                            return responsiveRowHeight[1000];
                                        } else {
                                            return responsiveRowHeight[1500];
                                        }
                                    }}
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
        </div>
    );
}

export default GallerySection;