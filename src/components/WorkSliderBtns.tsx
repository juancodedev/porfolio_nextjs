"use client"

import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'


interface WorkSliderBtnsProps {
    containerStyles: string | React.CSSProperties;
    btnStyles: string | React.CSSProperties;
    iconsStyles: string | React.CSSProperties;
}


const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
    const handlePrev = async () => {
        if (swiper && swiper.slidePrev) {
            await swiper.slidePrev();
        }
    }
    const handleNext = async () => {
        if (swiper && swiper.slideNext) {
            await swiper.slideNext();
        }
    }
    return (
        <div className={containerStyles as string}>
            <button className={btnStyles as string} onClick={handlePrev}>
                <PiCaretLeftBold className={iconsStyles as string} />
            </button>
            <button className={btnStyles as string} onClick={handleNext}>
                <PiCaretRightBold className={iconsStyles as string} />
            </button>
        </div>
    );
};

export default WorkSliderBtns