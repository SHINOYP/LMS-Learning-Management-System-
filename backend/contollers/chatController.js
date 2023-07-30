const express = require("express");
const ChatMessage = require("../model/chatModel");

const socketController = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    socket.on("chat", async (payload) => {
      console.log("What is payload", payload);
      io.emit("chat", payload);
      try {
        // Save the incoming chat message to MongoDB
        const chatMessage = new ChatMessage({
          sender: payload.sender,
          message: payload.message,
        });
        await chatMessage.save();
        console.log("Chat message saved to MongoDB");
      } catch (error) {
        console.error("Error saving chat message:", error);
      }
    });
  });
};

const getChat = async (req, res) => {
  try {
    const messages = await ChatMessage.find().sort({ timestamp: 1 }); // Retrieve all chat messages and sort by timestamp in ascending order
    res.json(messages);
  } catch (error) {
    console.error("Error retrieving chat messages:", error);
    res.status(500).json({ message: "Failed to retrieve chat messages" });
  }
};

module.exports = {
  socketController,
  getChat,
};
