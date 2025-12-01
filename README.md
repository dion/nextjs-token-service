# Token Service – Technical Assignment

A minimal token management service built with **Next.js (App Router)** and **TypeScript**.  
This implementation exposes two API endpoints for creating and listing user tokens, with in-memory storage for simplicity.

---

## 🚀 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **In-memory storage**
  - Chosen to keep the project lightweight and easy to run.
  - Tokens reset on server restart (acceptable for this assignment).

---

## 📦 How to Run the Project

### **Prerequisites**
- Node.js **>= 18**
- npm or yarn

### **Install dependencies**
```sh
npm install
```

### **Start the development server**
```sh
npm run dev 
```

### **API is now available at:**
- POST http://localhost:3000/api/tokens
- GET http://localhost:3000/api/tokens?userId=<id>

# 🧪 Testing the API

## Create a Token (POST)

Windows PowerShell example:
```linux
curl -X POST http://localhost:3000/api/tokens \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "123",
    "scopes": ["read", "write"],
    "expiresInMinutes": 60
  }'
```

```powershell
Invoke-RestMethod -Method POST -Uri "http://localhost:3000/api/tokens" `
  -ContentType "application/json" `
  -Body '{"userId":"123","scopes":["read","write"],"expiresInMinutes":60}'
```

## List Tokens (GET)

```linux
curl "http://localhost:3000/api/tokens?userId=123"
```

```powershell
Invoke-RestMethod "http://localhost:3000/api/tokens?userId=123"
```

# 📝 Assumptions & Simplifications

* **In-memory database** - No persistence is used; tokens disappear when the server restarts. This keeps the focus on API structure and TypeScript design rather than database setup.
* **Manual validation** - Validation is implemented without external libraries (e.g., Zod) to keep the code minimal and transparent.
* **Expiration logic** - Expired tokens are filtered out when retrieved. They are not permanently deleted from the store.
* **UUID generation** - Token IDs and tokens are generated via `crypto.randomUUID()` for simplicity.
