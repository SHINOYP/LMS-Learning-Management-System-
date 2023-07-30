import React, { useState, useEffect, useRef } from "react";
import Layout from "../componets/Layout/Layout";
import { io } from "socket.io-client";
import { nanoid } from "nanoid";
import { useAuthContext } from "../hooks/useAuthContext";
import { json } from "react-router-dom";
const socket = io.connect("http://localhost:4000");

function Chat() {
  const [prevMessage, setPrevMessage] = useState([]);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const { user } = useAuthContext();
  const messageRef = useRef();

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, sender: user?.name });
    setMessage("");
  };
  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  }, []);

  useEffect(() => {
    fetchAllMessages();
  }, []);
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });
  const fetchAllMessages = async () => {
    const response = await fetch("http://localhost:4000/api/user/messages", {
      method: "GET",
    });
    console.log(response);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      setPrevMessage(result);
    }
    if (!response.ok) {
      console.log(json.error);
    }
  };

  return (
    <Layout>
      <div
        ref={messageRef}
        className="flex flex-col  mb-[10vh]   h-full overflow-x-hidden overflow-y-scroll md:m-2 xl:mx-[5%] md:mt-10 lg:w-[90%] md:h-[80vh] md:rounded-2xl md:bg-slate-700"
      >
        <h1 className="md:pr-[10vw] text-black md:text-white  mx-auto text-4xl font-black p-4 ">
          Chat
        </h1>
        {prevMessage.map((payload, index) => {
          return (
            <p
              key={index}
              className={
                user?.name === payload.sender
                  ? "ml-auto  w-min bg-gradient-to-r from-sky-400 to-indigo-400 p-3 m-4 rounded-s-xl rounded-tr-xl"
                  : "mr-auto w-max bg-gradient-to-r from-sky-400 to-indigo-400 p-3 m-4 rounded-r-xl rounded-tl-xl"
              }
            >
              {user?.name !== payload.sender ? (
                <>
                  <span>{payload.sender}:</span>
                  <span>{payload.message}</span>
                </>
              ) : (
                <>{payload.message}</>
              )}
            </p>
          );
        })}
        {chat.map((payload, index) => {
          return (
            <p
              key={index}
              className="ml-auto  w-min bg-gradient-to-r from-sky-500 to-indigo-500 p-3 m-4 rounded-s-xl rounded-tr-xl"
            >
              {payload.message}
            </p>
          );
        })}
        <form
          onSubmit={sendChat}
          className="pb-2 md:w-[80%]  w-full md:justify-center fixed bottom-0 flex "
        >
          <input
            className="w-[80%] rounded-lg ml-2 drop-shadow-lg "
            type="text"
            name="chat"
            placeholder="sendtext"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            class="relative inline-flex items-center ml-2 justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            type="submit"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Sent
            </span>
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Chat;
