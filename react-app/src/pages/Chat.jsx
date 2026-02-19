import { useEffect, useState, useRef } from "react"
import { io } from "socket.io-client"
import Message from "../components/Message"
import TypingIndicator from "../components/TypingIndicator"
import "../styles/chat.css"

const socket = io("http://localhost:5000") // backend socket URL

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState("")
  const [typing, setTyping] = useState(false)

  const bottomRef = useRef(null)

  // 🔌 socket listeners
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg])
    })

    socket.on("typing", () => {
      setTyping(true)
      setTimeout(() => setTyping(false), 1000)
    })
  }, [])

  // ⬇ auto scroll bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // ✍ send message (Optimistic UI)
  const sendMessage = () => {
    if (!text.trim()) return

    const msg = {
      text,
      sender: "me",
      time: new Date().toLocaleTimeString()
    }

    // UI first update (optimistic)
    setMessages((prev) => [...prev, msg])

    socket.emit("message", msg)
    setText("")
  }

  const handleTyping = (e) => {
    setText(e.target.value)
    socket.emit("typing")
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((m, i) => (
          <Message key={i} message={m} />
        ))}

        {typing && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input">
        <input
          value={text}
          onChange={handleTyping}
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Chat
