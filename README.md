# Analiticbet - Betting Analytics Platform

## Project Overview

Analiticbet is a comprehensive betting analytics platform that helps users make informed decisions about sports betting. The platform consists of two main components: a client-side React application and a server-side API.

## Client Application

### Tech Stack

- React.js
- React Router DOM
- React Hot Toast
- TailwindCSS
- Lucide React Icons

### Features

- User Authentication
- Dashboard Analytics
- Real-time Statistics
- Subscription Management
- User Profile Management
- Responsive Design
- Image Lazy Loading
- Protected Routes

### Key Components

- Dashboard Layout
- Authentication System
- Statistics Visualization
- User Management
- Payment Integration

### Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── shared/
│   │   └── ...
│   ├── pages/
│   ├── store/
│   ├── routes/
│   ├── constants/
│   └── hooks/
```

## Server Application

### Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Features

- RESTful API
- User Authentication & Authorization
- Data Analytics
- Subscription Management
- Payment Processing
- Security Middleware

### API Documentation

API documentation is available in the `api_doc_anallitic` directory using Bruno API client.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone [repository-url]
```

2. Install Client Dependencies

```bash
cd client
npm install
```

3. Install Server Dependencies

```bash
cd server
npm install
```

4. Environment Setup
   Create `.env` files in both client and server directories with necessary environment variables.

### Running the Application

1. Start the Client

```bash
cd client
npm run dev
```

2. Start the Server

```bash
cd server
npm start
```

## Security Features

- JWT Based Authentication
- Protected Routes
- Secure Password Handling
- API Rate Limiting
- CORS Configuration

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
