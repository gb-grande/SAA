import {Card, Image, Text, Title} from "@mantine/core";
import {HashLink} from "react-router-hash-link";

export function PostCard({post, h, w, light=false, showDate=true, imgHPct=0.6, ...others}) {
    const {title, content, imageUrl} = post;
    
    let textH = h - 20;
    if (imageUrl) textH -= imgHPct * h;
    if (showDate) textH -= 10;
    const lineCount = Math.floor(textH / 32);

    const bgColor = light ? "aprai-purple.3" : "aprai-purple.9";
    const textColor = light ? "aprai-purple.9" : "white";
    return (
        <Card
            radius={0} shadow={"md"}
            h={h} w={w}
            bg={bgColor}
            {...others}
            component={HashLink} to={`/blog/${post._id}`}
        >
            {imageUrl &&
                <Card.Section>
                    <Image src={imageUrl} alt={title} height={imgHPct * h}/>
                </Card.Section>
            }

            <Card.Section p='sm' pt={imageUrl ? 0 : 'sm'}>
                {showDate &&
                    <Text size='xs' c={textColor}>{post.date.split('T')[0]}</Text>
                }
                <Title order={4} lineClamp={2} c={textColor}>{title}</Title>
                <Text c={textColor} lineClamp={lineCount} dangerouslySetInnerHTML={{__html: content}}/>
            </Card.Section>
        </Card>
    )
}