# Basic Authentication Example

This repository demonstrates a simple implementation of basic authentication using **Node.js** and **Express**.

## Features
- Secure user authentication with username and password
- Middleware for protecting routes
- Simple and clean structure for learning purposes

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [bun](https://bun.sh/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/hasanbakhtiar/basic-auth.git
   ```
2. Navigate to the project directory:
   ```bash
   cd basic-auth
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   bun install
   ```

### Running the Project
Start the server with the following command:
```bash
npm start 
```
or
```bash
bun start 
```

The application will run on `http://localhost:3000` (or the configured port). You can test the API using a browser or tools like Postman.

## API Endpoints

| Method | Endpoint       | Description                 | Authentication Required |
|--------|----------------|-----------------------------|-------------------------|
| POST   | `/login`       | Authenticate user           | No                      |
| POST   | `/register`       | Register user           | No                      |
| GET    | `/data`   | Access protected resources  | Yes                     |
For Admin
| GET    | `/users`   | Access protected resources  | Yes                     |
| GET    | `/:id`   | Access protected resources  | Yes                     |

### Example Usage
- To access protected routes, include a valid `Authorization` header with the format `Basic <base64-encoded-credentials>`.

## Project Structure
```
basic-auth/
├── package.json     # Project dependencies
├── server.js        # Main server file
├── middleware/      # Authentication middleware
└── routes/          # Application routes
```

## How It Works
1. Users send their credentials (username and password) in the HTTP headers.
2. Credentials are validated against predefined or dynamically configured user data.
3. If validation succeeds, users can access protected resources.

### Middleware
A middleware function is used to verify credentials for protected routes. Invalid or missing credentials result in an error response.

## Contributing
Contributions are welcome! Feel free to fork the repository, open an issue, or submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Contact
For any questions or feedback, please reach out to:
- **Name:** Hasan Bakhtiar
- **GitHub:** [@hasanbakhtiar](https://github.com/hasanbakhtiar)
