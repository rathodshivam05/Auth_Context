import {  Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import Status from "./Status";

const Navbar = () => {
  const { auth, toggleAuth } = useContext(Authcontext);

  return (
    <div>
      <Box
       backgroundColor="darkslategrey"
       p={0}
       m={0}
       display="flex"
       justifyContent="space-between"
      >
      <HStack spacing='14%' m={'20px'}>
        <Heading color={"white"} pr={'100px'} pl={'40px'}>Navbar</Heading>
        <Text color={'white'} fontWeight={'600'} fontSize={'16px'} pl={'70px'}>Home</Text>
        <Text color={'white'} fontWeight={'600'} fontSize={'16px'} pl={'80px'}>About</Text>
        <Text color={'white'} fontWeight={'600'} fontSize={'16px'} pl={'90px'}>Profile</Text>
        <Text color={'white'} fontWeight={'600'} fontSize={'16px'} pl={'100px'} pr={'70px'}>Gallery</Text>

        <Button
          as="button"
          size='md'
          borderRadius="md"
          color="white"
          ml={'30px'}
          colorScheme="whiteAlpha"

          onClick={() => {
            toggleAuth()
            console.log(auth)
          }}
        >
          {!auth ? "Log-out" : "Log-in"}
        </Button>
      </HStack>
      </Box>
      <Status />
    </div>
  );
};

export default Navbar;
