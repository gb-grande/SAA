import {
    Paper, Title, Text,
    Image, Space, Center, SimpleGrid, Anchor, Stack
} from "@mantine/core"
import FlipCard from "../components/FlipCard.jsx";
import PostCarousel from "../components/PostCarousel.jsx";
import Circle from "../components/Circle.jsx";
import EditableSectionText from "../components/EditableSectionText.jsx";
import classes from "./LandingPage.module.css"
import useFetch from "../hooks/useFetch.jsx";

function formatTelephone(number){
    if (!number) return '';

    // número = +5599999999999
    const cleaned = number.replace(/\D/g, '');
    // número = 5599999999999
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{4}|\d{5})(\d{4})$/);
    // número = 55 99 99999 9999
    if (match)
        return ['(', match[2], ')', match[3], '-', match[4]].join('')
    // número = (99) 99999-9999
    return number;
}

function LandingPage(){
    const {result: contactInfo, error: contactInfoErr} = useFetch('api/contactInfos', null, {
        phone: '',
        address: '',
        instagram: '',
        facebook: ''
    });
    if (contactInfoErr) console.error('Could not load contact info in landing page.', contactInfoErr);

    return (
        <>
            <EditableSectionText section="topQuote" containerStyle={{width: "100%"}} textClassName={classes.topQuote}/>

            <SimpleGrid w="100%" cols={{base: 1, sm: 2}} spacing={{base: 'xs', sm: 'lg'}} mt="md" mb="xl">
                <FlipCard
                    h={{lg: 350, md:300, sm: 250, base: 200}}
                    textFront="Nos ajude com a sua doação."
                    textBack="Informações da Doação"
                    editableBackTextSection="cardDoacao"
                    buttonText="DOE AGORA"
                    image="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    imageAlt="Gato (Siri)"/>

                <FlipCard
                    h={{lg: 350, md:300, sm: 250, base: 200}}
                    textFront="Maus tratos? DENUNCIE!"
                    editableBackTextSection="cardDenuncia"
                    buttonText="DENUNCIE AQUI"
                    image="https://t4.ftcdn.net/jpg/01/77/43/63/240_F_177436300_PN50VtrZbrdxSAMKIgbbOIU90ZSCn8y3.jpg"
                    imageAlt="Gato Triste"/>
            </SimpleGrid>

            <Title id='quemSomos'>Quem Somos</Title>
            <SimpleGrid /*Seção quem somos - TODO: add image*/
                cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
            >
                <EditableSectionText section="sobreNos" containerStyle={{height: "380px", width: "100%"}} textClassName={classes.paragraphText}/>
                <Image
                    radius="xl"
                    h={400}
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                />
            </SimpleGrid>

            <Paper h={{base: 400, sm: 500}} w="100%" bg="aprai-purple.3" my="xl" p={{base: "xs", sm: "md"}} radius="xl">
                <Title ta="center" mb={'md'}>Últimas Notícias</Title>
                <PostCarousel px={{base: "md", sm: "100"}} cardData={{h: 300, w: {base: 200, xs: 350}}}/>
            </Paper>

            <Center my="xl">
                <SimpleGrid /*Círculos informativos*/
                    cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
                    spacing={{ base:'100px', sm: '100px', md: '100px', lg: '100px', xl: '100px'}}
                    verticalSpacing='xs'
                >
                    <Circle
                        icon="dog"
                        number="300"
                        numberSection="numAnimais"
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
                        numberSection="numDenuncia"
                        description="Denúncias registradas"
                    />
                    <Circle
                        icon="food"
                        number="800"
                        numberSection="numRacao"
                        description="Quilos de ração doados"
                    />
                    <Circle
                        icon="vet"
                        number="200"
                        numberSection="numConsulta"
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
                    <Text className={classes.contactValueText}>
                        {contactInfo.address}
                    </Text>
                    <Space h="xl" />
                    <Text ta="center" size="xl" fw={500}>
                        Telefone
                    </Text>
                    <Anchor ta="center" size="lg" fw={500} href={`tel:${contactInfo.phone}`}>
                        {formatTelephone(contactInfo.phone)}
                    </Anchor>
                    <Space h="xl" />
                    <Text ta="center" size="xl" fw={500}>
                        Redes Sociais
                    </Text>
                    <Anchor ta="center" size="lg" fw={500} href={contactInfo.facebook}>
                        Facebook: Aprai Indaiatuba
                    </Anchor>
                    <Anchor ta="center" size="lg" fw={500} href={`https://www.instagram.com/${contactInfo.instagram}`}>
                        Instagram: {contactInfo.instagram}
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