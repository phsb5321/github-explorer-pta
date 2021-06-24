// Foto do perfil ✔ 
// Nome ✔ 
// Empresas que faz parte (Companies) ✔ 
// Redes Sociais
// Quantidade de Repositórios ✔ 
// Bio ✔ 
// Localização ✔

import { Badge, Box, Center, Image } from "@chakra-ui/react"

export function UserCard({ userData }) {

    return (

        <Center height="80vh" >
            <Center display="flex" flexDirection="column">
                <Image
                    borderRadius="280px"
                    src={userData.avatar_url}
                    alt="user profile picture"
                    width="280px" />

                <Box
                    mt="5"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated >
                    {userData.name}
                </Box>

                <Box width="80%" textAlign="center">
                    {userData.location}
                </Box>

                <Badge borderRadius="full" px="2" colorScheme="teal">
                    {userData.public_repos} public repositories
                </Badge>


                {userData.company && (
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                    >
                        {userData.company}
                    </Box>
                )}

                <Box width="80%" textAlign="center">
                    {userData.bio}
                </Box>

            </Center>
        </Center>

    );
}

