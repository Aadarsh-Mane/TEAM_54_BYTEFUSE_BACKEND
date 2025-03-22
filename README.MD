# Women's Safety App Backend

## Overview

This is the backend for the Women's Safety App, built to provide real-time safety features like live location sharing and an SOS feature. The backend is developed using Node.js with Express.js, and it integrates various third-party services for enhanced functionality.

## Features

- **User Authentication**: Secure login and registration using bcrypt and JWT.
- **Live Location Sharing**:Real-time location sharing with trusted contacts.
- **SOS Alerts**: Instant SOS notifications using Twilio for SMS/Voice alerts.
- **Cloud Storage**: Image and document uploads via Cloudinary.
- **Safe Route Navigation:** Suggested safe routes based on various factors.
- **Database**: MongoDB with Mongoose for data storage and retrieval.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Cloud Services**: Cloudinary
- **Notifications**: Twilio/Fast2API (SMS/Voice),
- **Authentication**: JWT, bcrypt
- **Environment Variables**: Dotenv
- **API Integration**: Google APIs (googleapis)

## Installation

### Prerequisites

- Node.js installed (v16+ recommended)
- MongoDB instance running (local or cloud)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Aadarsh-Mane/womensafety-backend.git
cd womensafety-backend
```

2. Install dependencies:

```bash
npm install
```

## Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

## Team

ByteFuse
