import {
    Paper, Title, Text,
    Image, Space, Center, SimpleGrid, Anchor, Stack
} from "@mantine/core"
import FlipCard from "../components/FlipCard.jsx";
import PostCarousel from "../components/PostCarousel.jsx";
import Circle from "../components/Circle.jsx";

function LandingPage(){
    return (
        <>
            <Text c="aprai-purple.9" ta="center" fz={{base: "30px", md: "3vw"}}  ff={"Just Me Again Down Here"}>
                "Se você não gosta de animais, o problema é seu.
                Se você maltrata animais, o problema é nosso."
            </Text>

            <SimpleGrid w="100%" cols={{base: 1, sm: 2}} spacing={{base: 'xs', sm: 'lg'}} mt="md" mb="xl">
                <FlipCard
                    h={{lg: 350, md:300, sm: 250, base: 200}}
                    textFront="Nos ajude com a sua doação."
                    textBack="Informações da Doação"
                    buttonText="DOE AGORA"
                    image="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    imageAlt="Gato (Siri)"/>

                <FlipCard
                    h={{lg: 350, md:300, sm: 250, base: 200}}
                    textFront="Maus tratos? DENUNCIE!"
                    textBack="Informações da Denúncia"
                    buttonText="DENUNCIE AQUI"
                    image="https://t4.ftcdn.net/jpg/01/77/43/63/240_F_177436300_PN50VtrZbrdxSAMKIgbbOIU90ZSCn8y3.jpg"
                    imageAlt="Gato Triste"/>
            </SimpleGrid>

            <Title id='quemSomos'>Quem Somos</Title>
            <SimpleGrid /*Seção quem somos - TO-DO: add image*/
                cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
            >
                <div>
                    <Space h="md" />
                    <Text ta="justify" fz="20px">
                        A Associação de Proteção aos Animais de Indaiatuba foi fundada em 1988,
                        com o objetivo de fiscalizar e coibir maus tratos contra animais, bem
                        como atuar no controle populacional  de cães e gatos conscientizando a
                        população sobre a importância da castração. A entidade busca atender ao
                        maior número possível de denúncias sobre maus tratos, além de orientar
                        tutores, atuar no controle de transmissão de zoonoses, ajudar famílias
                        carentes com consultas, vacinas e ração, entre outros serviços. A APRAI
                        tem o objetivo de ser a principal referência no apoio e defesa dos animais
                        do município de Indaiatuba.
                    </Text>
                </div>
                <Image
                    radius="xl"
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                />
            </SimpleGrid>

            <Paper h={{base: 400, sm: 500}} w="100%" bg="aprai-purple.3" my="xl" p={{base: "xs", sm: "md"}} radius="xl">
                <Title ta="center" mb={'md'}>Últimas Notícias</Title>
                <PostCarousel px={{base: "md", sm: "100"}} cardData={{h: 300, w: {base: 200, xs: 350}}}/>
            </Paper>

            <Center my="xl">
                <SimpleGrid /*Círculos informativos - All fine*/
                    cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
                    spacing={{ base:'100px', sm: '100px', md: '100px', lg: '100px', xl: '100px'}}
                    verticalSpacing='xs'
                >
                    <Circle
                        icon="dog"
                        number="300"
                        description={(
                            <>
                                Animais<br />
                                doados
                            </>
                        )}
                    />
                    <Circle
                        icon="alert"
                        number="100"
                        description="Denúncias registradas"
                    />
                    <Circle
                        icon="food"
                        number="800"
                        description="Quilos de ração doados"
                    />
                    <Circle
                        icon="vet"
                        number="200"
                        description="Consultas realizadas"
                    />
                </SimpleGrid>
            </Center>

            {/*Seção Contato*/}
            {/*TODO: Extract styles into classes, and get rid of Space abuse*/}
            <SimpleGrid
                my="xl"
                cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
            >
                <Stack id="contato" gap="0">
                    <Title ta="center" mb={"md"}>Contato</Title>
                    <Text ta="center" size="xl" fw={500}>
                        Endereço
                    </Text>
                    <Text ta="center" size="lg" fw={500}>
                        Rua Onze de Junho, 684 - Centro,
                        Indaiatuba - SP, 13330-050
                    </Text>
                    <Space h="xl" />
                    <Text ta="center" size="xl" fw={500}>
                        Telefone
                    </Text>
                    <Anchor ta="center" size="lg" fw={500} href='tel:+55193835-7134'>
                        (19) 3835-7134
                    </Anchor>
                    <Space h="xl" />
                    <Text ta="center" size="xl" fw={500}>
                        Redes Sociais
                    </Text>
                    <Anchor ta="center" size="lg" fw={500} href='https://www.facebook.com/indaiatuba.aprai/'>
                        Facebook: Aprai Indaiatuba
                    </Anchor>
                    <Anchor ta="center" size="lg" fw={500} href='https://www.instagram.com/aprai.indaiatuba/'>
                        Instagram: @aprai.indaiatuba
                    </Anchor>
                </Stack>
                <div>
                    <Image
                        radius="xl"
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    />
                </div>
            </SimpleGrid>
        </>
    );
}

export default LandingPage