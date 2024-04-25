import { Title, Text, Image, Center} from "@mantine/core"
import { useParams } from 'react-router-dom';



function BlogPost() {
    const {id} = useParams();
    const today = new Date();
    const post = {
        title: "APRAI",
        time: today,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitxnXh3BCHXlUOIPJdO1y51fEPdGCGf9bImEnIUVo_uPy5ECws2w1iAI2wrDs8Sc0oVbtdnYZvFG5UzykV-qvcWamD-Wyj6MOvh6UCTXHPH-5Xf-B5tH-8BqYSvw4roWyud7AgdE_3eXc/s800/pet_omocha_inu.png",
        text: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel tincidunt purus, vel vulputate augue. Integer ut ex metus. Nulla imperdiet lobortis felis, sed pellentesque magna rutrum aliquet. Maecenas nec tincidunt leo, eu faucibus lectus. Maecenas hendrerit purus et diam rhoncus scelerisque. Cras tempor odio ac mi sodales, non laoreet nibh egestas. Quisque non luctus lacus. 
        Quisque pulvinar faucibus elementum. Ut cursus augue vitae consectetur tincidunt. Pellentesque dignissim, diam in ullamcorper rhoncus, ex tellus pharetra lorem, sed accumsan nisl dui consequat ipsum. Donec mollis vitae tortor faucibus consectetur. Aenean dolor urna, dapibus ut risus ut, aliquet tempor nunc. Suspendisse tempor dignissim nunc id mattis. Nullam at magna lorem.
        
        Fusce id magna nec purus accumsan fringilla. Sed porta in velit ac pharetra. Mauris condimentum sapien in urna gravida accumsan. Donec porta rhoncus arcu. Nullam convallis sem mauris, eu malesuada est ornare venenatis. Curabitur nec consectetur diam, eu ultrices ipsum. Sed viverra faucibus sem, non scelerisque nulla congue varius. Pellentesque quam quam, porttitor quis nulla vitae, consequat blandit lacus. Integer id nisi nec orci cursus condimentum molestie ac metus.
        Duis luctus accumsan lacus, ut suscipit lectus fermentum a. Maecenas nulla turpis, rhoncus sed mi vitae, mattis egestas ipsum. Sed auctor odio risus, sed luctus mauris bibendum vel. Aenean leo tellus, aliquet et finibus pretium, blandit in est. Donec congue urna nibh. Vestibulum pellentesque est quis eleifend facilisis. Sed blandit ligula et quam dignissim, ac sagittis turpis vulputate.
        In id vulputate sapien. Quisque vel nisl posuere metus imperdiet venenatis. Morbi gravida, dui sollicitudin finibus hendrerit, eros nisi volutpat nisi, id condimentum diam dui ac massa. Nulla vel urna urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum sit amet dui in sodales. Nullam a elit sed sem euismod maximus.
    `
    };
    
    return (
        <>
            <Title>{post.title}</Title>
            <Text c="aprai-purple.9">Postado em {post.time.getDate()}/{post.time.getMonth() + 1}/{post.time.getFullYear()}, as {post.time.getHours()}:{post.time.getMinutes()}</Text>
            <Center>
                <Image m="md" w={{lg: 350, md:300, sm: 250, base: 200}} radius="xl" src={post.image} />
            </Center>
            <Text 
                ml={{base: "5%", sm: "10%"}} 
                mr={{base: "5%", sm: "10%"}} 
                style={{whiteSpace: "pre-line", textAlign: "justify"}}>
                    {post.text}
            </Text>
        </>
    )
}

export default BlogPost