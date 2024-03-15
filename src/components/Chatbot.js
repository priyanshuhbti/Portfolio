import React from 'react'
import { Helmet } from 'react-helmet';

const Chatbot = () => {
  return (
    <div>
        
            <Helmet>
                <script>
                    {`
                        window.embeddedChatbotConfig = {
                            chatbotId: "_M2J6G4ntaEO9s6D6j4pz",
                            domain: "www.chatbase.co"
                        };
                    `}
                </script>
                <script
                    src="https://www.chatbase.co/embed.min.js"
                    chatbotId="_M2J6G4ntaEO9s6D6j4pz"
                    domain="www.chatbase.co"
                    defer
                />
            </Helmet>
        </div>
  )
}

export default Chatbot
