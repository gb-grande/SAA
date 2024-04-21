import {Paper, Title, Text, MantineProvider, 
        Image, Space, Center, SimpleGrid} from "@mantine/core"

function LandingPage(){
    return (
        <>
            <MantineProvider /*Se necessário para configs futuras
                               TO-DO: add text fonts/colors*/
                theme={{
                    fontFamily: 'Karla, sans-serif',
                }}
            >
            </MantineProvider>

            <Text c="blue" ta="center" fz="xl" fw={600}>
                "Se você não gosta de animais, o problema é seu.
                Se você maltrata animais, o problema é nosso."
            </Text>

            <Paper m="md" shadow="xl" radius="md" withBorder p="xl" size="100%">
                <SimpleGrid /*Seção quem somos - TO-DO: add image*/
                    cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
                > 
                    <div>
                        <Title c="blue">Quem Somos</Title>
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
                        <Title c="blue">Contato</Title>
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