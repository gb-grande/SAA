import {
    Paper, Title, Text,
    Image, Space, Center, SimpleGrid
} from "@mantine/core"
import { Link, useParams } from 'react-router-dom';



function BlogPost() {
    const {id} = useParams();
    const post = {
        title: "APRAI",
        time: "",
        image: "https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/424425093_286940224099553_19848131652106230_n.jpg?ccb=11-4&oh=01_Q5AaIHiORn1CH8ly8YGXOC7U2tbG67Z7gX4oYR6vMyvuIwHW&oe=6630039C&_nc_sid=e6ed6c&_nc_cat=103",
        text: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel tincidunt purus, vel vulputate augue. Integer ut ex metus. Nulla imperdiet lobortis felis, sed pellentesque magna rutrum aliquet. Maecenas nec tincidunt leo, eu faucibus lectus. Maecenas hendrerit purus et diam rhoncus scelerisque. Cras tempor odio ac mi sodales, non laoreet nibh egestas. Quisque non luctus lacus.\n
        
        Quisque pulvinar faucibus elementum. Ut cursus augue vitae consectetur tincidunt. Pellentesque dignissim, diam in ullamcorper rhoncus, ex tellus pharetra lorem, sed accumsan nisl dui consequat ipsum. Donec mollis vitae tortor faucibus consectetur. Aenean dolor urna, dapibus ut risus ut, aliquet tempor nunc. Suspendisse tempor dignissim nunc id mattis. Nullam at magna lorem.\n
        
        Fusce id magna nec purus accumsan fringilla. Sed porta in velit ac pharetra. Mauris condimentum sapien in urna gravida accumsan. Donec porta rhoncus arcu. Nullam convallis sem mauris, eu malesuada est ornare venenatis. Curabitur nec consectetur diam, eu ultrices ipsum. Sed viverra faucibus sem, non scelerisque nulla congue varius. Pellentesque quam quam, porttitor quis nulla vitae, consequat blandit lacus. Integer id nisi nec orci cursus condimentum molestie ac metus.\n
        
        Duis luctus accumsan lacus, ut suscipit lectus fermentum a. Maecenas nulla turpis, rhoncus sed mi vitae, mattis egestas ipsum. Sed auctor odio risus, sed luctus mauris bibendum vel. Aenean leo tellus, aliquet et finibus pretium, blandit in est. Donec congue urna nibh. Vestibulum pellentesque est quis eleifend facilisis. Sed blandit ligula et quam dignissim, ac sagittis turpis vulputate.\n
        
        In id vulputate sapien. Quisque vel nisl posuere metus imperdiet venenatis. Morbi gravida, dui sollicitudin finibus hendrerit, eros nisi volutpat nisi, id condimentum diam dui ac massa. Nulla vel urna urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum sit amet dui in sodales. Nullam a elit sed sem euismod maximus.\n
    `
    };

    return (
        <>
            <Title>{post.title}</Title>
            <Text>{post.text}</Text>
        </>
    )
}

export default BlogPost