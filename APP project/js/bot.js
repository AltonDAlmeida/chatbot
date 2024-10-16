 window.addEventListener('dfMessengerLoaded', function(event) {
        const dfMessenger = document.querySelector('df-messenger');
        
        // Listen for all responses, including the fallback intent
        dfMessenger.addEventListener('df-response-received', function(event) {
            const responseMessages = event.detail.response.queryResult.fulfillmentMessages;
            
            responseMessages.forEach((message) => {
                if (message.text.text.includes("I didn't understand") || message.text.text.includes("Sorry, can you say that again?")) {
                    console.log("Fallback triggered:", message.text.text);
                    // You can customize the UI or take special actions here when the fallback is triggered.
                }
            });
        });
    });

