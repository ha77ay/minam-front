import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const EventMessage = () => {
  useEffect(() => {
    const clientId = nanoid();
    const eventUrl = `http://localhost:8080/event/${clientId}`;
    const eventSource = new EventSource(eventUrl);

    eventSource.onmessage = (event) => {
      console.log(event);
    };
  }, []);

  return <></>;
};

export default EventMessage;
