import ChatInput from "./components/chat-input"

function Page() {
    return (
        <div>
            <div className="text-center mb-8 mt-10">
                <h1 className="text-5xl font-bold mb-2 uppercase">ASK <span className='text-[#00BDE0]'>medicine</span></h1>
            </div>
            <div className="flex items-center justify-center">
                <ChatInput />
            </div>
        </div>
    )
}

export default Page

