import { Box } from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { HiOutlineTicket } from "react-icons/hi";
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
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/counterSlice";

function Card(props) {
  const count = useSelector((state) => state.counter.value);
  const title = useSelector((state) => state.counter.title);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="rounded-lg h-32 mt-5 w-full md:w-full bg-white p-4">
      <Box className=" flex justify-between  items-center ">
        <Box className="w-8/12">
          <p className=" text-gray-700 font-semibold">{props.title}</p>
          <Box className="text-xs flex justify-between w-full mt-3">
            <p className="text-green-500">{props.purchased} Purchased</p>
            <p className="text-orange-300">{props.left} Left</p>
          </Box>
        </Box>
        <Box
          onClick={onOpen}
          className="rounded-lg p-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100 cursor-pointer"
        >
          {props.icon}
        </Box>
      </Box>
      <Box mt={3} className="flex justify-between">
        <p
          onClick={() => dispatch(increment(props.title))}
          className="font-bold text-lg cursor-pointer text-blue-500 w-full"
        >
          {props.action}
        </p>

        {props.title === title && (
          <div className="flex justify-between w-8/12 items-center">
            <div>
              <p className="text-2xl font-bold cursor-pointer">+</p>
            </div>
            <p
              onClick={() => dispatch(increment(props.title))}
              className="text-black font-semibold"
            >
              {" "}
              {count}
            </p>
            <div>
              <p
                onClick={() => dispatch(decrement(props.title))}
                className="text-3xl font-bold cursor-pointer"
              >
                -
              </p>
            </div>
          </div>
        )}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Topup {props.title} Tickets</ModalHeader>
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
