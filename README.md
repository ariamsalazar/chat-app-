# Chat App

## Features

- **Message storage**: Saves and retrieves messages via MongoDB
- **Fetch messages**: `GET /api/v1/messages` with optional pagination (`limit`, `before`, `after`)
- **Send messages**: `POST /api/v1/messages` with `author` and `message` fields
- **Real-time updates**: Polls for new messages using the `after` query param
- **Authentication**: Bearer token protected endpoints
- **Swagger docs**: Interactive API explorer at `/api/v1/docs`

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Backend API running (default: `http://localhost:3000`)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd chat-app

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_API_TOKEN=your-secret-token
```

### Running the app

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## Screenshots

### Messages list from other users

<img width="947" height="658" alt="image" src="https://github.com/user-attachments/assets/99443219-5a1b-415c-8fe7-37ecc2a7c4e6" />

### User sending a message

<img width="942" height="658" alt="image" src="https://github.com/user-attachments/assets/2cd432fe-aa01-482f-93b9-a731a8c0dbeb" />
