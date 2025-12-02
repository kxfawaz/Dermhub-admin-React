# 📌 Project Proposal — DermHub Admin Dashboard (Capstone Project #2)

## 2️⃣ Project Overview
DermHub Admin Dashboard is a React-based management platform used by dermatologists and medical administrators to review online consultations submitted by patients. The platform allows staff to view each case, read the patient’s answers, assess uploaded images, and update consultation status throughout evaluation.

This project is focused exclusively on the **administrator workflow**, supporting efficient review and clinical decision-making.

---

## 3️⃣ Problem & Motivation
Doctors currently rely on scattered tools (emails, shared drives, phone notes) to manage e-consults. This causes:
- Delayed responses to patients  
- Inconsistent follow-up tracking  
- Lost or inaccessible clinical details  

DermHub Admin Dashboard centralizes all incoming consultations into one secure workspace, improving care delivery and operational efficiency.

---

## 4️⃣ Target Users
- Dermatologists and medical reviewers  
- Clinic administrative staff  
- Healthcare teams handling e-consults  

---

## 5️⃣ Core Features (MVP)

| Category | Feature |
|---------|---------|
| Authentication | Admin login / role-based access control |
| Consultation Management | View queue of submitted consultations |
| Consultation Details | Access full patient record including: main question, answers, uploaded images |
| Follow-Up Review | Display and evaluate follow-up question responses |
| Status Updates | Mark consultations as pending, in-review, or completed |
| API Data Fetching | Securely fetch patient data from backend API |

---

## 6️⃣ Stretch Features (Future Enhancements)
- Admin ability to request additional follow-up questions
- Secure messaging/comments with the patient
- Analytics: consultation volume, time to completion, common conditions
- Attach treatment plans or recommended products
- Search/filter by condition, severity, date submitted

---

## 7️⃣ Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React (Vite), React Router |
| State Management | useState / useEffect + API helpers |
| Styling | TailwindCSS or modular CSS |
| API | REST endpoints from existing Flask backend |
| Deployment | Render.com or Netlify |

---

## 8️⃣ Key Screens / UI Pages
- **Dashboard** — table list of submitted consultations
- **Consultation Detail Page** — shows all patient-submitted info + images
- **Login Page** — secure admin access
- **Unauthorized Redirect** — prevents non-admin access

**Optional Enhancements**
- Loading and error states  
- Full-size image modal preview

---

## 9️⃣ Success Criteria
- Successful data retrieval from live backend
- Full console detail view including images
- Route/page protection blocking unauthorized users
- Fully deployed production version with functional navigation

---

## 🔟 Why This Project Matters
This platform supports actual tele-medicine workflows:
- Improves efficiency for patient case review
- Demonstrates strong React experience (routing, data fetching, UI/UX)
- Successfully integrates with live backend + authentication
- Provides foundation for future full clinical release

---

## 1️⃣1️⃣ Deliverables
- Live deployed admin application
- GitHub repository with documentation
- Clean UI component architecture
- Demo walkthrough video

---

## 📌 Note
Since time was limited during development, a **pre-created username and password** were used for admin login rather than building a full authentication system. The core focus of the project was delivering the **admin dashboard functionality** for doctors.

---
