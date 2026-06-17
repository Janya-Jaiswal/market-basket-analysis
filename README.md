# market-basket-analysis

# PRD: AI-Powered Retail Analytics & Recommendation System

## 1. Product Overview

Build a full-stack retail analytics platform that helps retailers analyze transactions, discover product associations, recommend products, and provide AI-powered shopping guidance.

The system uses:

- Market Basket Analysis
- Apriori Algorithm
- FP-Growth Algorithm
- Association Rule Mining
- Firebase Authentication
- Firestore Database
- Gemini AI Assistant
- React Dashboard

---

## 2. Objectives

The application should allow:

- Admins to manage products and transactions
- Admins to train recommendation models
- Customers to browse products
- Customers to receive product recommendations
- Users to chat with an AI shopping assistant
- Admins to view sales and recommendation analytics

---

## 3. Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router DOM
- Axios
- Recharts

### Backend

- Node.js
- Express.js

### Database

- Firebase Firestore

### Authentication

- Firebase Authentication
- Email/password login
- Google login

### Machine Learning Service

- Python
- pandas
- numpy
- scikit-learn

### AI

- Gemini API

---

## 4. User Roles

### Admin

Admin can:

- Login
- Manage products
- Upload transactions
- Train MBA models
- View analytics
- View association rules
- Manage users

### Customer

Customer can:

- Register/login
- Browse products
- View product details
- Add products to cart
- Get recommendations
- Use AI shopping assistant

---

## 5. Core Features

## 5.1 Authentication

Features:

- Register
- Login
- Google login
- Logout
- Password reset
- Role-based access

Pages:

- Login
- Register

---

## 5.2 Product Management

Admin can:

- Add product
- Edit product
- Delete product
- Search products
- Filter products by category
- Track stock

Firestore collection:

```js
products {
  productId,
  name,
  category,
  description,
  price,
  stock,
  image,
  createdAt
}
```

---

## 5.3 Transaction Management

Admin can upload CSV transaction data.

CSV format:

```csv
TransactionID,Products
1,Laptop|Mouse|Keyboard
2,Laptop|Laptop Bag
3,Mouse|Keyboard
```

System should:

- Parse CSV
- Store transactions in Firestore
- Trigger model training
- Generate association rules

Firestore collection:

```js
transactions {
  transactionId,
  customerId,
  products[],
  totalAmount,
  status,
  timestamp
}
```

---

## 5.4 Market Basket Analysis

Implement manually:

- Apriori Algorithm
- FP-Growth Algorithm
- Association Rule Mining

Outputs:

- Frequent itemsets
- Association rules
- Support
- Confidence
- Lift

Firestore collection:

```js
associationRules {
  ruleId,
  antecedent[],
  consequent[],
  support,
  confidence,
  lift,
  createdAt
}
```

---

## 5.5 Recommendation Engine

Input:

```json
{
  "product": "Laptop"
}
```

Output:

```json
{
  "recommendations": ["Mouse", "Laptop Bag", "Keyboard"]
}
```

Recommendation logic:

- Match selected product with association rules
- Sort by confidence and lift
- Return top recommended products

---

## 5.6 AI Shopping Assistant

User query:

```txt
I want a laptop for college.
```

Workflow:

```txt
User Query
→ Recommendation Engine
→ Association Rules
→ Gemini API
→ Natural Language Response
```

Example response:

```txt
For college use, a laptop is commonly purchased with a laptop bag, wireless mouse, and keyboard. These improve portability and productivity.
```

---

## 5.7 Analytics Dashboard

Dashboard should show:

- Total revenue
- Total orders
- Revenue trends
- Daily sales
- Monthly sales
- Top-selling products
- Low-stock products
- Product category distribution
- Most frequent itemsets
- Top association rules
- Support vs confidence chart
- Lift distribution

Charts:

- Line chart
- Bar chart
- Pie chart
- Scatter plot
- Area chart
- Heatmap

---

## 6. Backend API Requirements

### Products

```http
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Transactions

```http
GET  /api/transactions
POST /api/transactions
POST /api/upload-transactions
```

### Market Basket Analysis

```http
POST /api/mba/train
GET  /api/mba/rules
GET  /api/mba/itemsets
POST /api/mba/recommend
```

### Analytics

```http
GET /api/analytics/sales
GET /api/analytics/products
GET /api/analytics/mba
```

### AI Assistant

```http
POST /api/ai/chat
```

---

## 7. Folder Structure

```txt
market-basket-ai-system/

├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── services/
│   ├── firebase/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── ml-service/
│   ├── algorithms/
│   │   ├── apriori.py
│   │   ├── fp_growth.py
│   │   └── association_rules.py
│   ├── services/
│   │   ├── trainer.py
│   │   ├── recommender.py
│   │   └── analytics.py
│   ├── datasets/
│   ├── exports/
│   ├── main.py
│   └── requirements.txt
│
└── docs/
```

---

# Step-by-Step Development Plan

## Phase 1: Project Setup

### Step 1: Create Project Folder

```bash
mkdir market-basket-ai-system
cd market-basket-ai-system
```

### Step 2: Create Frontend

```bash
npm create vite@latest frontend
cd frontend
npm install
npm install react-router-dom axios recharts firebase
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Create Backend

```bash
cd ..
mkdir backend
cd backend
npm init -y
npm install express cors dotenv firebase-admin multer csv-parser axios
npm install nodemon --save-dev
```

### Step 4: Create ML Service

```bash
cd ..
mkdir ml-service
cd ml-service
python -m venv venv
pip install pandas numpy scikit-learn flask
```

---

## Phase 2: Firebase Setup

### Step 5: Create Firebase Project

Create a Firebase project and enable:

- Firebase Authentication
- Firestore Database
- Google login provider
- Email/password login provider

### Step 6: Configure Firebase in Frontend

Create:

```txt
frontend/src/services/firebase.js
```

Add Firebase client configuration.

### Step 7: Configure Firebase Admin in Backend

Create:

```txt
backend/firebase/firebaseAdmin.js
```

Use Firebase Admin SDK for backend Firestore access.

---

## Phase 3: Authentication

### Step 8: Build Auth Context

Create:

```txt
frontend/src/context/AuthContext.jsx
```

Handle:

- Current user
- Login
- Register
- Google login
- Logout

### Step 9: Build Login and Register Pages

Create:

```txt
frontend/src/pages/Login.jsx
frontend/src/pages/Register.jsx
```

### Step 10: Add Protected Routes

Create:

```txt
frontend/src/components/ProtectedRoute.jsx
```

Protect dashboard and admin pages.

---

## Phase 4: Product Module

### Step 11: Backend Product APIs

Create:

```txt
backend/routes/productRoutes.js
backend/controllers/productController.js
```

Implement:

- Add product
- Get products
- Get product by ID
- Update product
- Delete product

### Step 12: Frontend Product Pages

Create:

```txt
frontend/src/pages/Products.jsx
frontend/src/pages/ProductDetails.jsx
frontend/src/components/ProductCard.jsx
```

---

## Phase 5: Transaction Upload

### Step 13: Backend CSV Upload API

Create:

```txt
backend/routes/transactionRoutes.js
backend/controllers/transactionController.js
```

Implement:

```http
POST /api/upload-transactions
```

### Step 14: Frontend Upload Page

Create:

```txt
frontend/src/pages/UploadTransactions.jsx
```

Allow admin to upload CSV files.

---

## Phase 6: ML Algorithms

### Step 15: Implement Apriori

Create:

```txt
ml-service/algorithms/apriori.py
```

Implement:

- Generate candidate itemsets
- Count support
- Prune itemsets
- Return frequent itemsets

### Step 16: Implement FP-Growth

Create:

```txt
ml-service/algorithms/fp_growth.py
```

Implement:

- FP-tree
- Header table
- Conditional pattern base
- Frequent pattern mining

### Step 17: Implement Association Rules

Create:

```txt
ml-service/algorithms/association_rules.py
```

Calculate:

- Support
- Confidence
- Lift

---

## Phase 7: ML Service API

### Step 18: Create Flask API

Create:

```txt
ml-service/main.py
```

Expose:

```http
POST /train
POST /recommend
GET  /rules
GET  /itemsets
```

### Step 19: Connect Backend to ML Service

In backend, create:

```txt
backend/services/mlService.js
```

Backend should call Flask APIs using Axios.

---

## Phase 8: Recommendation Engine

### Step 20: Backend Recommendation API

Create:

```http
POST /api/mba/recommend
```

Input:

```json
{
  "product": "Laptop"
}
```

Output:

```json
{
  "recommendations": ["Mouse", "Laptop Bag", "Keyboard"]
}
```

### Step 21: Frontend Recommendations Page

Create:

```txt
frontend/src/pages/Recommendations.jsx
frontend/src/components/RecommendationCard.jsx
```

---

## Phase 9: Analytics Dashboard

### Step 22: Backend Analytics APIs

Create:

```txt
backend/routes/analyticsRoutes.js
backend/controllers/analyticsController.js
```

Implement:

```http
GET /api/analytics/sales
GET /api/analytics/products
GET /api/analytics/mba
```

### Step 23: Frontend Dashboard

Create:

```txt
frontend/src/pages/Dashboard.jsx
frontend/src/pages/Analytics.jsx
frontend/src/components/AnalyticsCard.jsx
```

Use Recharts for:

- Revenue trend
- Top products
- Category distribution
- Support vs confidence
- Monthly revenue

---

## Phase 10: Gemini AI Assistant

### Step 24: Backend Gemini Service

Create:

```txt
backend/services/geminiService.js
```

Use Gemini API to generate shopping responses.

### Step 25: AI Chat API

Create:

```http
POST /api/ai/chat
```

Flow:

```txt
User message
→ Get related recommendations
→ Send context to Gemini
→ Return AI response
```

### Step 26: Frontend Chat Page

Create:

```txt
frontend/src/pages/AIShoppingAssistant.jsx
frontend/src/components/ChatBox.jsx
```

---

## Phase 11: Admin Panel

### Step 27: Build Admin Panel

Create:

```txt
frontend/src/pages/AdminPanel.jsx
```

Admin panel should include:

- Product management
- Transaction upload
- Model training button
- Association rules viewer
- Analytics access

---

## Phase 12: Testing

### Step 28: Test Backend APIs

Use Postman or Thunder Client.

Test:

- Product APIs
- Transaction upload
- MBA training
- Recommendation API
- Analytics APIs
- AI chat API

### Step 29: Test Frontend Flow

Test:

- Register
- Login
- Browse products
- Upload transactions
- Train model
- View rules
- Get recommendations
- Chat with AI assistant

---

## Phase 13: Deployment

### Step 30: Deploy Frontend

Options:

- Vercel
- Netlify
- Firebase Hosting

### Step 31: Deploy Backend

Options:

- Render
- Railway
- Google Cloud Run

### Step 32: Deploy ML Service

Options:

- Render
- Railway
- Google Cloud Run

### Step 33: Add Environment Variables

Frontend:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_BACKEND_URL=
```

Backend:

```env
PORT=
FIREBASE_PROJECT_ID=
GEMINI_API_KEY=
ML_SERVICE_URL=
```

ML Service:

```env
PORT=
```

---

# Recommended Build Order

Follow this exact order:

1. Setup frontend, backend, and ML service
2. Setup Firebase
3. Implement authentication
4. Implement product CRUD
5. Implement transaction upload
6. Implement Apriori
7. Implement association rules
8. Implement recommendation API
9. Implement analytics APIs
10. Build dashboard UI
11. Add Gemini assistant
12. Add FP-Growth
13. Polish UI
14. Test end-to-end
15. Deploy

---

# MVP Scope

For first version, build only:

- Login/register
- Product management
- CSV transaction upload
- Apriori algorithm
- Association rules
- Product recommendations
- Basic dashboard
- Gemini shopping assistant

Skip for MVP:

- FP-Growth
- Customer segmentation
- Sales forecasting
- Real-time updates
- Advanced admin user management

---

# Final Deliverable

A production-style SaaS dashboard where:

- Admin uploads transactions
- System finds product associations
- Customers receive recommendations
- AI explains recommendations
- Dashboard shows sales and basket analytics




# market-basket-analysis
user
Name- string
DOB- string/date
Email- string/email
Password- string

datatypes
integer
boolean
string- "Janya jaiswal","1"
float
long
char
double

# Product
id- number/integer
name- string
version/model no.- string
images- array[string,url]
price- float
