"use client";

import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { Flex, Stat, StatLabel, StatNumber, VStack } from "@chakra-ui/react";
import { MessageItem } from "../../lib/types/types";
import Connector from "../../lib/services/signalRConnection";

const MockMessages = [
  {
    message: "Hey Travis! Would you like to go out for a coffee?",
    from: "others",
    dateSent: "20:21",
  },
  {
    message: "Sure! At 11:00 am?",
    from: "me",
    dateSent: "20:22",
  },
  {
    message: "That's too early! How about at noon?",
    from: "others",
    dateSent: "20:22",
  },
  {
    message: "That sounds good as well. Where should we meet?",
    from: "me",
    dateSent: "20:23",
  },
  {
    message: "Meet me at the hardware store on 21 Duck Street.",
    from: "others",
    dateSent: "20:23",
  },
  {
    message: "Sounds good. I'll bring my friend with me as well!",
    from: "me",
    dateSent: "20:24",
  },
  {
    message: "Which one? The developer or the designer?",
    from: "others",
    dateSent: "20:24",
  },
  {
    message: "The developer. You remember Tony, right?",
    from: "me",
    dateSent: "20:24",
  },
  {
    message: "Yeah! Tony's a great guy!",
    from: "others",
    dateSent: "20:25",
  },
  {
    message: "Indeed he is! Alright, see you later 👋!",
    from: "me",
    dateSent: "20:25",
  },
];

const containerStyle: React.CSSProperties = {
  overflowY: "scroll", // Enable vertical scrolling
  msOverflowStyle: "none", // IE and Edge
  scrollbarWidth: "none", // Firefox
  // '&::-webkit-scrollbar': {
  //     display: 'none',
  // }
};

export default function Chat() {
  const { newMessage, events } = Connector();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(MockMessages);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    newMessage(message);
    const newMessageObj = {
      message: message,
      from: "me",
      dateSent: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessageObj]);
    console.log(messages);
    setMessage("");
  };

  useEffect(() => {
    events((message) => {
      const newMessageObj = {
        message: message,
        from: "others",
        dateSent: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessageObj]);
      console.log("message received: ", message);
    });
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <Flex w="full" flexDirection="column">
      <Flex
        ref={containerRef}
        style={containerStyle}
        w="full"
        overflowY="scroll"
        flexDirection="column"
        flex={1}
        alignSelf={"flex-start"}
      >
        <Stat mt={1}>
          <StatLabel color="gray.500">Chatting with</StatLabel>
          <StatNumber>user2.Name</StatNumber>
          <StatLabel color="gray.500">Owner of</StatLabel>
          <StatNumber>user2.Pet.Name</StatNumber>
        </Stat>
        {messages.map(({ message, from, dateSent }: MessageItem, index) => (
          <Message
            key={index}
            message={message}
            from={from as "me" | "others"} // me : others
            dateSent={dateSent}
          />
        ))}
      </Flex>
      <MessageInput
        message={message}
        onInputChange={handleInputChange}
        onSendMessage={handleSendMessage}
      />
    </Flex>
  );
}