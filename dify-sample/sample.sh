curl -X POST 'http://localhost/v1/chat-messages' \
--header 'Authorization: Bearer app-dPpFFRg5vqYjP8ZuG0hSpHCa' \
--header 'Content-Type: application/json' \
--data-raw '{
    "inputs": {
        "enqueteName": "iPhone 13 Pro Max"
    },
    "query": "What are the specs of the iPhone 13 Pro Max?",
    "user": "abc-123"
}'
