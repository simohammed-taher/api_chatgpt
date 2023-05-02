# OpenAI API Chatbot

This repository contains a simple chatbot server built with Node.js, Express, and OpenAI's GPT-4 API.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js (v12 or higher)
- npm

### Installation

1. Clone the repository:
git clone `https://github.com/your-username/openai-chatbot.git`
2. Change into the project directory:
cd openai-chatbot

3. Install the required dependencies:
`npm install`

4. Create a `.env` file in the project root and add your OpenAI API key:
API_KEY=your_openai_api_key_here

5. Start the server:
`npm start`


## Usage

The server listens on port 8000 by default. You can interact with the chatbot by sending a POST request to the root route (`/`) with a JSON payload containing a `question` key.

Example:

```json
{
"question": "What is simohammed 💯 ?"
}
