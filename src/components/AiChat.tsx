"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { User, Send, X } from "lucide-react";
import Image from "next/image";
import { getBotReply } from "@/data/portfolio";
import botIcon from "@/assets/Graident Ai Robot.png";

interface Message {
  id: number;
  type: "user" | "bot";
  text: string;
}

const suggestions = [
  "Tell me about Orcabase",
  "What is his tech stack?",
  "Is he available for hire?",
  "What makes him unique?",
];

let msgId = 0;

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: ++msgId,
      type: "bot",
      text: "Hey! I'm Rushabh's portfolio AI. I know everything about his projects, skills, and experience. What would you like to know?",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    setTimeout(() => {
      if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }, 50);
  };

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;
      setInputVal("");

      setMessages((prev) => [...prev, { id: ++msgId, type: "user", text }]);
      setIsTyping(true);
      scrollDown();

      const delay = 1000 + Math.random() * 800;
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: ++msgId, type: "bot", text: getBotReply(text).replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}👋🤖🚀⚡🔧☁️📁🎓📚📜📧📱📍💼⚙️🎨🗄️🐙🍽️👤]/gu, "") },
        ]);
        scrollDown();
      }, delay);
    },
    [isTyping]
  );

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className={`ai-chat-widget ${isOpen ? "is-open" : ""}`}>
      {/* Tooltip Label */}
      {!isOpen && (
        <div className="chat-tooltip">
          Ask About Rushabh.
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Image src={botIcon} alt="AI Chatbot" width={40} height={40} className="chat-toggle-icon" />
        )}
      </button>

      {/* Chat Window */}
      <div className="chat-window shadow-xl">
        <div className="chat-header">
          <div className="ai-avatar">
            <Image src={botIcon} alt="AI Avatar" width={28} height={28} />
          </div>
          <div className="chat-header-info">
            <div className="name">Portfolio AI</div>
            <div className="sub">
              <span
                style={{
                  width: 5,
                  height: 5,
                  background: "var(--green)",
                  borderRadius: "50%",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              online
            </div>
          </div>
          <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="chat-messages" ref={msgsRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`msg ${msg.type}`}>
              <div className="msg-avatar">
                {msg.type === "user" ? (
                  <User size={14} />
                ) : (
                  <Image src={botIcon} alt="Bot" width={16} height={16} />
                )}
              </div>
              <div className="msg-bubble">{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="msg bot">
              <div className="msg-avatar">
                <Image src={botIcon} alt="Bot" width={16} height={16} />
              </div>
              <div className="msg-bubble">
                <div className="typing-indicator">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="chat-suggestions">
          {suggestions.map((s) => (
            <button key={s} className="sug-chip" onClick={() => sendMessage(s)}>
              {s}
            </button>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask anything..."
            autoComplete="off"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(inputVal)}
          />
          <button className="chat-send" onClick={() => sendMessage(inputVal)}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
