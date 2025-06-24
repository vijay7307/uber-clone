# User Registration API Documentation

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system. This endpoint validates the input, hashes the password, creates a user in the database, and returns a JWT authentication token along with the created user data.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

### Field Requirements

- `fullName.firstName` (string, required): Minimum 2 characters.
- `fullName.lastName` (string, optional): Minimum 2 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

## Example Request

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": {
      "firstName": "Alice",
      "lastName": "Smith"
    },
    "email": "alice.smith@example.com",
    "password": "securePass123"
  }'
```

## Example Successful Response

```json
{
  "user": {
    "_id": "60f7c2b5e1d2c8a1b8e4d123",
    "fullName": {
      "firstName": "Alice",
      "lastName": "Smith"
    },
    "email": "alice.smith@example.com",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Status Codes

- `201 Created`: User registered successfully.
- `400 Bad Request`: Validation failed. Returns an array of error messages.
- `500 Internal Server Error`: Unexpected server error.

## Error Response Example

```json
{
  "errors": [
    {
      "msg": "First name must be at least 2 characters long",
      "param": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

### Endpoint

`POST /users/login`

### Description

Authenticates an existing user using their email and password. If the credentials are valid, returns a JWT authentication token and user data.

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

### Example Request

```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "alice.smith@example.com",
    "password": "securePass123"
  }'
```

### Example Successful Response

```json
{
  "user": {
    "_id": "60f7c2b5e1d2c8a1b8e4d123",
    "fullName": {
      "firstName": "Alice",
      "lastName": "Smith"
    },
    "email": "alice.smith@example.com",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Status Codes

- `200 OK`: Login successful.
- `400 Bad Request`: Validation failed. Returns an array of error messages.
- `401 Unauthorized`: Invalid email or password.
- `500 Internal Server Error`: Unexpected server error.

### Error Response Example

```json
{
  "message": "Invalid email or password"
}
```
---