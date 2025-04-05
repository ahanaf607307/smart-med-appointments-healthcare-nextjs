"use client"

import { useState } from "react"

// Simple send icon component
const SendIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m22 2-7 20-4-9-9-4Z"></path>
        <path d="M22 2 11 13"></path>
    </svg>
)

// Button component with Tailwind
const Button = ({ type, disabled, className, children }) => (
    <button
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 w-10 ${className}`}
    >
        {children}
    </button>
)

function ChatInput() {
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!message.trim()) return

        setIsLoading(true)
        // Here you would typically send the message to your API
        console.log("Sending message:", message)

        // Simulate API call
        setTimeout(() => {
            setMessage("")
            setIsLoading(false)
        }, 1000)
    }

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <form
                onSubmit={handleSubmit}
                className="relative flex items-center border rounded-lg shadow-sm bg-white overflow-hidden"
            >
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message..."
                    className="flex-1 px-4 py-3 resize-none max-h-[200px] min-h-[56px] outline-none border-none"
                    rows={1}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSubmit(e)
                        }
                    }}
                    onInput={(e) => {
                        const target = e.target
                        target.style.height = "auto"
                        target.style.height = `${Math.min(target.scrollHeight, 200)}px`
                    }}
                />
                <Button
                    type="submit"
                    disabled={!message.trim() || isLoading}
                    className="absolute right-2 bg-blue-500 hover:bg-blue-600 text-white"
                >
                    <SendIcon />
                </Button>
            </form>
        </div>
    )
}

export default ChatInput

