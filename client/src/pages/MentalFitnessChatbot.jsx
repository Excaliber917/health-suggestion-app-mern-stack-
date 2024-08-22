
import ChatContainer from "../components/ChatContainer";
import ChatInput from "../components/ChatInput";

const MentalFitnessChatbot = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* ChatContainer will take up the available space */}
            <ChatContainer />

            {/* ChatInput will be sticky at the bottom */}
            <div className="sticky bottom-0">
                <ChatInput />
            </div>
        </div>
    );
};

export default MentalFitnessChatbot;
