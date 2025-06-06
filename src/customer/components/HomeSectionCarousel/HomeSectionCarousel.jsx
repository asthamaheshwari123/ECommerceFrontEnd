import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    // Validate and handle the `data` prop
    const items = Array.isArray(data)
        ? data.slice(0, 10).map((item) => <HomeSectionCard product={item} />)
        : [];

    const slidePrev = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    };

    const slideNext = () => {
        if (activeIndex < items.length - responsive[1024].items) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const syncActiveIndex = (event) => setActiveIndex(event.item);

    return (
        <div className='px-4 lg:px-8'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative px-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex < items.length - responsive[1024].items && (
                    <Button
                        variant='contained'
                        className='z-50 bg-white'
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white"
                        }}
                        color="white"
                        aria-label='next'
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
                {activeIndex !== 0 && (
                    <Button
                        variant='contained'
                        className='z-50 bg-white'
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(-90deg)",
                            bgcolor: "white"
                        }}
                        color="white"
                        aria-label='previous'
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
