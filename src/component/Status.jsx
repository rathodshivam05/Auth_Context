import React, { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import { Box, Heading } from "@chakra-ui/react";

const Status = () => {
  const { auth, token } = useContext(Authcontext);
  return (
    <div>
      <Box
    backgroundColor="crimson"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"100% 100%"}
        height="90vh"
        w="100%"
        m={"40px auto"}
        color="white"
        display={'grid'}
        placeItems="center"
      >
        <Heading fontSize={"35px"}>
          {!auth ? "Your Token is : " + token : "Status : Log-Out "}
        </Heading>
      </Box>
    </div>
  );
};

export default Status;
