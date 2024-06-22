import {Carousel, CarouselSlide} from "@mantine/carousel";
import {PostCard} from "./PostCard.jsx";
import {useMediaQuery} from "@mantine/hooks";
import {Center, useMantineTheme} from "@mantine/core";
import {IconCaretRightFilled, IconCaretLeftFilled} from "@tabler/icons-react";
import classes from './PostCarousel.module.css'
import useFetch from "../hooks/useFetch.jsx";

/**
 * A Post Carousel component to display a carousel of posts.
 * 
 * @param {object} slideGap The gap between slides at different breakpoints. Default: {base: "xs", sm: "md"}.
 * @param {object} cardData The dimensions of each card in the carousel. Default: {h: 100, w: 100}.
 * @returns The PostCarousel component.
 */
function PostCarousel({slideGap = {base: "xs", sm: "md"}, cardData = {h: 100, w: 100}, ...others}){
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const {result: posts} = useFetch('api/posts', {
        defaultValue: []
    });

    const cards = posts.map((data, i) => {
        return (
            //The slide is slightly bigger than the card to ensure it doesn't crop shadows
            <CarouselSlide key={i} h={1.05 * cardData.h}>
                <Center>
                    <PostCard post={data} showDate={false} {...cardData}/>
                </Center>
            </CarouselSlide>)
    })

    const caretProps = {
        color: theme.colors['aprai-purple'][9],
        size: isMobile ? 60 : 90,
        // style:{stroke: "white"},
    };
    return (
        <Carousel
            classNames={classes}
            styles={{control: {backgroundColor: 'transparent', border: 0, boxShadow: 'none'}}}
            slideSize={isMobile ? '100%' : '33.33333%'}
            slideGap={isMobile ? 0 : slideGap}
            align={isMobile ? 'center' : 'start'}
            nextControlIcon={<IconCaretRightFilled  {...caretProps}/>}
            previousControlIcon={<IconCaretLeftFilled {...caretProps}/>}
            {...others}
        >
            {cards}
        </Carousel>
    );
}

export default PostCarousel;