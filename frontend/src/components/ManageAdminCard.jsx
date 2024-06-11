import {Card, Button, Text, Title, Flex, Space} from "@mantine/core";
import {HashLink} from "react-router-hash-link";

export function ManageAdminCard({post, h, w, light=false, showDate=true, imgHPct=0.6, ...others}) {
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


            <Card.Section p='sm' >
                {showDate && post.date?.toLocaleDateString &&
                    <Text size='xs' c={textColor}>{post.date.toLocaleDateString()}</Text>
                }

                <Space h = "3px"/>
                <Flex justify = 'space-between' align = 'center'>
                    <Title order={4} lineClamp={2} c={textColor} style={{ marginRight: '10px' }}>
                        {title}
                    </Title>

                    <div>
                    <   Flex justify = 'space-between' align = 'center'>
                            <Button component={HashLink} to="/admin/cadastro/">
                                Editar
                            </Button>

                            <Space w = "xs"/>
                            
                            <Button component={HashLink} bg = "red" >
                                Deletar
                            </Button>
                        </Flex>
                    </div>
                </Flex>
                
                <Text c={textColor} lineClamp={lineCount} dangerouslySetInnerHTML={{__html: content}}/>

               
            </Card.Section>
        </Card>
    )
}