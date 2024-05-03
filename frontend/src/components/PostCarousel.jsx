import {Carousel, CarouselSlide} from "@mantine/carousel";
import {PostCard} from "./PostCard.jsx";
import {useMediaQuery} from "@mantine/hooks";
import {Center, useMantineTheme} from "@mantine/core";
import {IconCaretRightFilled, IconCaretLeftFilled} from "@tabler/icons-react";
import classes from './PostCarousel.module.css'

const mockData = Array(10).fill({
    id: 0,
    title: "Título do post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel tincidunt purus, vel vulputate augue. Integer ut ex metus. Nulla imperdiet lobortis felis, sed pellentesque magna rutrum aliquet. Maecenas nec tincidunt leo, eu faucibus lectus. Maecenas hendrerit purus et diam rhoncus scelerisque. Cras tempor odio ac mi sodales, non laoreet nibh egestas. Quisque non luctus lacus. \n        Quisque pulvinar faucibus elementum. Ut cursus augue vitae consectetur tincidunt. Pellentesque dignissim, diam in ullamcorper rhoncus, ex tellus pharetra lorem, sed accumsan nisl dui consequat ipsum. Donec mollis vitae tortor faucibus consectetur. Aenean dolor urna, dapibus ut risus ut, aliquet tempor nunc. Suspendisse tempor dignissim nunc id mattis. Nullam at magna lorem.",
    image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: new Date()
});

function PostCarousel({slideGap = {base: "xs", sm: "md"}, cardData = {h: 100, w: 100}, ...others}){
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const cards = mockData.map((data, i) => {
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