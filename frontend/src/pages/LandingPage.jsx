import {
    Paper, Title, Text, MantineProvider,
    Image, Space, Center, SimpleGrid, Stack, Flex
} from "@mantine/core"
import FlipCard from "../components/FlipCard.jsx";
import PostCarousel from "../components/PostCarousel.jsx";

function LandingPage(){
    return (
        <>
            <Text c="aprai-purple.9" ta="center" fz="2em" ff={"Just Me Again Down Here"}>
                "Se você não gosta de animais, o problema é seu.
                Se você maltrata animais, o problema é nosso."
            </Text>

            <Center m="sm">
                <Flex direction={{base: "column", md: 'row'}} gap={{base: "sm", md: "xl"}} justify="flex-center" align="center">
                    <FlipCard
                        w={{xs: 500, base: 400}} h="300"
                        imgW={{xs: 250, base: 200}}
                        textFront="Nos ajude com a sua doação."
                        textBack="Informações da Doação"
                        buttonText="DOE AGORA"
                        image="https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/424425093_286940224099553_19848131652106230_n.jpg?ccb=11-4&oh=01_Q5AaIHiORn1CH8ly8YGXOC7U2tbG67Z7gX4oYR6vMyvuIwHW&oe=6630039C&_nc_sid=e6ed6c&_nc_cat=103"
                        imageAlt="Gato (Siri)"/>

                    <FlipCard
                        w={{xs: 500, base: 400}} h="300"
                        imgW={{xs: 250, base: 200}}
                        textFront="Maus tratos? DENUNCIE!"
                        textBack="Informações da Denúncia"
                        buttonText="DENUNCIE AQUI"
                        image="https://t4.ftcdn.net/jpg/01/77/43/63/240_F_177436300_PN50VtrZbrdxSAMKIgbbOIU90ZSCn8y3.jpg"
                        imageAlt="Gato Triste"/>
                </Flex>
            </Center>

            <Paper m="md" shadow="xl" radius="md" withBorder p="xl" size="100%">
                <SimpleGrid /*Seção quem somos - TO-DO: add image*/
                    cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
                > 
                    <div>
                        <Title>Quem Somos</Title>
                        <Space h="md" />
                        <Text ta="justify" fz="lg">
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
                    <div>
                        <Image
                        radius="xl"
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                        />
                    </div>
                </SimpleGrid>
            </Paper>

            <Paper h="500" bg="aprai-purple.3" mt="md" mb="md" p="md" pb="xl" radius="xl">
                {/*<Stack h="100%" gap="md">*/}
                    <Title ta="center">Últimas Notícias</Title>
                    <PostCarousel m="xl" cardData={{h: 300, w: 350}}/>
                {/*</Stack>*/}
            </Paper>
            
            <Paper m="lg" shadow="xl" radius="md" withBorder p="xl" size="100%">
                <Center>
                <SimpleGrid /*Círculos informativos - TO-DO: add images*/
                    cols={{ base: 1, sm: 2, lg: 3 }}
                    spacing={{ base:'100px', sm: '100px', md: '125px', lg: '150px'}}
                >
                    <div
                        style={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'blue',
                            borderRadius: '50%',
                            border: '5px solid black',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>
                            <Image
                            radius="xl"
                            src=""
                            />
                            <Text ta="center" size="50px" c="green" fw={700}>
                                + 300
                            </Text>
                            <Text ta="center" size="35px" c="White">
                                Animais resgatados
                            </Text>
                        </Text>
                    </div>
                    <div
                        style={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'blue',
                            borderRadius: '50%',
                            border: '5px solid black',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>
                            <Image
                            radius="xl"
                            src=""
                            />
                            <Text ta="center" size="50px" c="green" fw={700}>
                                + 100
                            </Text>
                            <Text ta="center" size="35px" c="White">
                                Denúncias registradas
                            </Text>
                        </Text>
                    </div>
                    <div
                        style={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'blue',
                            borderRadius: '50%',
                            border: '5px solid black',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>
                            <Image
                            radius="xl"
                            src=""
                            />
                            <Text ta="center" size="50px" c="green" fw={700}>
                                + 800
                            </Text>
                            <Text ta="center" size="35px" c="White">
                                Quilos de ração doados
                            </Text>
                        </Text>
                    </div>
                </SimpleGrid>
                </Center>
            </Paper>

            <Paper m="md" shadow="xl" radius="md" withBorder p="xl" size="100%">
                <SimpleGrid /*Seção Contato - TO-DO: add links and map*/
                    cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
                >
                    <div>
                        <Title>Contato</Title>
                        <Space h="md" />
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
                        <Text ta="center" size="lg" fw={500}>
                            (19) 3835-7134
                        </Text>
                        <Space h="xl" />
                        <Text ta="center" size="xl" fw={500}>
                            Redes Sociais
                        </Text>
                        <Text ta="center" size="lg" fw={500}>
                            Facebook: Aprai Indaiatuba <br />
                            Instagram: @aprai.indaiatuba
                        </Text>
                    </div>
                    <div>
                        <Image
                        radius="xl"
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                        />
                    </div>
                </SimpleGrid>
            </Paper>
        </>
    );
}

export default LandingPage