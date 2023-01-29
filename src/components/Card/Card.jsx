import { Box } from "@chakra-ui/react";
import React from "react";
import { GrProjects } from "react-icons/gr";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  Input,
} from "@chakra-ui/react";
import { HiOutlineTicket } from "react-icons/hi";

function Card(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="rounded-lg mt-5 w-full md:w-full bg-white p-4">
      <div className="rounded-lg my-2">
        <img
          src={props.pic}
          className="h-32 w-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <Box className=" flex justify-between  items-center ">
        <Box>
          <p className=" text-gray-700 text-lg font-semibold">{props.title}</p>
          <p className="font-bold text-2xl ">{props.number}</p>
        </Box>
        {/* <Box className="rounded-lg p-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100">
          {props.icon}
        </Box> */}
      </Box>
      <Box className="text-xs flex justify-between mt-3">
        <p
          className="text-blue-500 font-bold text-lg cursor-pointer"
          onClick={onOpen}
        >
          Buy Tickets
        </p>
        <p className="text-green-500 text-lg">{props.pending} Available</p>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buy {props.title} Tickets</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<HiOutlineTicket color="gray.300" />}
                />
                <Input type="number" placeholder="Quantity" />
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  _readOnly={true}
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="$"
                />
                <Input placeholder="Amount" />
              </InputGroup>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue">Pay with Ecocash</Button>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Card;
