## Battleship - Express.JS

```markdown
# Battleship Game API

This repository contains an API for a simple Battleship game, allowing a single player to play against a static grid. The API is built using Node.js and Express.

## Features

- **Start a new game**: Initializes a new game with a static 10x10 grid and places ships on it.
- **Take a shot**: Allows the player to make a move by specifying a coordinate.
- **Get game status**: Retrieves the current status of the game and the game grid.

## Requirements

- Node.js (v16 or later)
- SQLite3 (for database)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kalanatebel97/battleship.git
   cd battleship-game-api
   ```

2. **Install Dependencies**

   Make sure you have Node.js and npm (Node Package Manager) installed. Install the necessary dependencies with:

   ```bash
   npm install
   ```

## Usage

1. **Start the Server**

   Run the following command to start the server:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000` by default.

2. **API Endpoints**

   - **Start a New Game**

     **Endpoint:** `POST /api/game/start`

     **Response:**

     ```json
     {
       "gameId": "1"
     }
     ```

   - **Take a Shot**

     **Endpoint:** `POST /api/game/:id/shoot`

     **Request Body:**

     ```json
     {
       "shot": "A5"
     }
     ```

     **Response:**

     ```json
     {
       "result": "Hit",
       "status": "ongoing"
     }
     ```

   - **Get Game Status**

     **Endpoint:** `GET /api/game/:id`

     **Response:**

     ```json
     {
       "id": "1",
       "grid": [
         ["S", "S", "S", "S", "S", null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null]
       ],
       "status": "ongoing"
     }
     ```
## Dependencies

This project uses the following npm packages:

- **express**: A minimal and flexible Node.js web application framework.
- **sqlite3**: A SQLite3 client for Node.js.
- **body-parser**: Middleware to parse incoming request bodies.
- **nodemon**: A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- **dotenv**: Loads environment variables from a `.env` file.
