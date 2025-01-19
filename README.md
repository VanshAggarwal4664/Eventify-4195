# Eventify

Eventify-4195 is a web application designed to facilitate event management. It includes features for user authentication, event creation and management, real-time chat, and certificate distribution.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Event creation, approval, and management
- Real-time chat functionality using Socket.io
- Certificate creation and distribution
- File uploads and downloads
- Filtering and searching events

## Project Structure

```
Eventify-4195/
├── Client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── Server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── package.json
│   └── ...
└── README.md
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/Eventify-4195.git
    cd Eventify-4195
    ```

2. Install dependencies for both client and server:
    ```sh
    cd Client
    npm install
    cd ../Server
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    cd Server
    npm start
    ```

2. Start the client:
    ```sh
    cd Client
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:5173`.

## API Endpoints

### User Routes
- `POST /api/v1/user/register`: Register a new user
- `POST /api/v1/user/login`: Login a user
- `GET /api/v1/user/profile`: Get user profile

### Event Routes
- `POST /api/v1/event/register`: Create a new event
- `GET /api/v1/event/ongoing-events`: Get ongoing events
- `GET /api/v1/event/upcoming-events`: Get upcoming events
- `GET /api/v1/event/past-events`: Get past events
- `GET /api/v1/event/created-events`: Get events created by the user

### Chat Routes
- `POST /api/v1/chat/create`: Create a new chat
- `GET /api/v1/chat/:chatid`: Get chat details

### Message Routes
- `POST /api/v1/message/send`: Send a message
- `POST /api/v1/message/sendfile`: Send a file
- `GET /api/v1/message/:chatid`: Get all messages for a chat

### Certificate Routes
- `POST /api/v1/certificate/create-certificate`: Create a certificate
- `GET /api/v1/certificate/get-certificate/:id`: Get a certificate for an event
- `POST /api/v1/certificate/send-certificate/:id`: Send certificates to users

## Technologies Used

- **Frontend**: React, Chakra UI, Redux Toolkit, React Router
- **Backend**: Express.js, MongoDB, Mongoose, Socket.io
- **Other**: Cloudinary for file uploads, JWT for authentication

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.