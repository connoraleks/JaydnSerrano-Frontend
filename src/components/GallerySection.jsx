import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";

import Sections from "./Sections";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from './CustomAccordion';
const GallerySection = ({gallery}) => {
    const [expanded, setExpanded] = useState(false);
    const [sections, setSections] = useState(new Sections());
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    useEffect(() => {
        console.log(sections.sections)
        console.log(sections.section_data)
    } , []);
    return (
        <div ref={gallery} className="h-fit text-white my-4">
            {/* Create an accordion for each section in sections */}
            {/* Inform the user if loading is happening */}
        </div>
    );
}

export default GallerySection;