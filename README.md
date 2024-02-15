# IP-HCK67

# CookTab API Documentation
## Endpoints:

List of available endpoints:
### User Authentication
- POST /users/signup
- POST /users/signin
- GET /users/current
- POST /users/logout

### Bookmark Management
- GET /bookmarks
- GET /bookmarks/:id
- POST /bookmarks
- PUT /bookmarks/:id
- DELETE /bookmarks/:id
- GET /bookmarks/user_recipe

## User Authentication

### 1. POST /users/signup
_Request:
- body:

_Response (201 - Created):
{
  "message": "User created successfully",
  "user": { "id": "string", "email": "string" }
}

_Response (400 - Bad Request):
{
  "message": "All fields are required"
}
OR
{
  "message": "Passwords do not match"
}

_Response (500 - Internal Server Error):
{
  "message": "Error creating user",
  "error": "string"
}

2. POST /users/signin
_Request:

body:
{
  "email": "string",
  "password": "string"
}

_Response (200 - OK):
{
  "message": "User logged in successfully",
  "user": { "id": "string", "email": "string" }
}

_Response (400 - Bad Request):
{
  "message": "All fields are required"
}

_Response (500 - Internal Server Error):
{
  "message": "Error adding data",
  "error": "string"
}

3. GET /users/current
_Response (200 - OK):
{
  "message": "User logged in successfully",
  "user": { "id": "string", "email": "string" }
}

_Response (401 - Unauthorized):
{
  "message": "Unauthorized"
}

_Response (500 - Internal Server Error):
{
  "message": "Error adding data",
  "error": "string"
}

4. POST /users/logout
_Response (200 - OK):
{
  "message": "User logged out successfully"
}

_Response (401 - Unauthorized):
{
  "message": "Unauthorized"
}

_Response (500 - Internal Server Error):
{
  "message": "Error adding data",
  "error": "string"
}


Bookmark Management

5. GET /bookmarks
_Response (200 - OK):
{
  "message": "Data retrieved successfully",
  "data": [
    {
      // Bookmark data object structure
    },
    // More bookmark data objects
  ]
}

_Response (500 - Internal Server Error):
{
  "error": "Failed to get bookmarks: string"
}

6. GET /bookmarks/:id
_Response (200 - OK):
{
  // Bookmark data object structure
}

_Response (404 - Not Found):
{
  "error": "Bookmark not found"
}

_Response (500 - Internal Server Error):
{
  "error": "Failed to get bookmarks: string"
}

7. POST /bookmarks
_Request:
body:
{
  // Bookmark data object structure
}

_Response (201 - Created):
{
  "message": "Data added successfully",
  "id": "string"
}

_Response (500 - Internal Server Error):
{
  "message": "Error adding data",
  "error": "string"
}

8. PUT /bookmarks/:id
_Request:
body:
{
  // Updated bookmark data object structure
}

_Response (200 - OK):
{
  "message": "Data updated successfully"
}

_Response (500 - Internal Server Error):
{
  "message": "Error updating data",
  "error": "string"
}

9. DELETE /bookmarks/:id
_Response (200 - OK):
{
  "message": "Data deleted successfully"
}

_Response (500 - Internal Server Error):
{
  "message": "Error deleting data",
  "error": "string"
}

10. GET /bookmarks/user_recipe
_Request:
query parameters:
id_user: "string"
id_recipe: "integer"

_Response (200 - OK):
{
  // Bookmark data object structure
}

_Response (404 - Not Found):
{
  "error": "Bookmark not found"
}

_Response (500 - Internal Server Error):
{
  "message": "Error adding data",
  "error": "string"
}

