const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender === "me" ? "me" : "other"}`}>
      <p>{message.text}</p>
      <span>{message.time}</span>
    </div>
  )
}

export default Message
