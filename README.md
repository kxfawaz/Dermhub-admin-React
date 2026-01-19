# 🩺 DermHub Admin Dashboard

DermHub Admin Dashboard is a React-based platform for dermatologists and clinical staff to review and manage patient dermatology e-consultations submitted through the main DermHub patient application.

This project focuses exclusively on the **admin workflow**, supporting efficient review, clinical evaluation, and outcome tracking.

---


## 📌 Features

### Core Functionalities (MVP)
- 🔐 Admin-only access (Will update to JWT authentication)
- 📋 Dashboard view of all submitted consultations
- 🔍 Consultation detail view including:
  - Main question (skin condition)
  - All patient answers
  - Uploaded images with preview
- 🔁 Secure data fetching from Flask backend
- 🏷 Status update controls (Pending → In Review → Completed)

### Stretch Features (Planned Enhancements)
- Search and filtering by condition/date
- Messaging/comments between admin and patient
- Analytics for case volume and resolution speed
- Image zoom modal and multiple-image handling

---

## 🧭 Admin User Flow

1️⃣ **Login**
- Admin logs in → receives secure token
- Unauthorized users are blocked

2️⃣ **View Dashboard**
- List of patient consultations
- Key info: submission date, status, condition

3️⃣ **Open Consultation**
- Full detail view
- Patient answers + uploaded images visible for clinical review

4️⃣ **Take Action**
- Mark case as:
  - Pending
  - In Review
  - Completed
- *(Future: Request more info or send treatment response)*

→ Case updates are saved and reflected in dashboard view.

---

## 🛠️ Tech Stack

| Area | Technology |
|------|------------|
| Frontend | React (Vite), React Router |
| UI/Styling |  CSS Modules |
| API/Data | Axios/Fetch, REST API (Flask backend) |
| Deploy | Render  |

---

## 📂 Project Structure

src/
│── api/ # API fetch helpers
│── components/ # Shared UI components
│── pages/ # Main routes
│ ├── Login.jsx
│ ├── ConsultationList.jsx
│ ├── ConsultationDetail.jsx
│── hooks/ # Custom hooks (optional)
│── utils/ # Auth/token helpers
│── App.jsx
└── main.jsx


## 🔌 API Usage

The DermHub Admin Dashboard communicates with a separate Flask backend through a RESTful API. The frontend uses Axios/Fetch to perform secure HTTP requests to retrieve and update consultation data.

### Key API Operations:
- **GET `/api/consultations`** → Fetch a list of all patient consultations
- **GET `/api/consultations/:id`** → Retrieve detailed information for a specific consultation
- **PATCH `/api/consultations/:id/status`** → Update consultation review status (pending, in-review, completed)
- **POST `/auth/login`** → Authenticate an administrator and receive access credentials

The API sends and receives JSON, and all protected routes require a valid admin session/token.  
This ensures **only authorized medical staff** can access sensitive patient information.
