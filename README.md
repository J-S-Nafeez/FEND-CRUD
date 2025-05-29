# ✅ People Manager Angular App (Frontend)

A powerful Single Page Application (SPA) built using **Angular 8** to manage people data with full **CRUD operations**. The app connects seamlessly to a RESTful API backend to provide real-time data updates, validations, and clean navigation.

---

## 🚀 Overview

This Angular frontend is part of a full-stack People Manager system. It includes:

- 📋 Viewing all persons
- 🖊️ Editing person details
- 🗑️ Deleting a person with confirmation
- ✅ Reactive forms with validation
- 📱 Responsive design
- 🔄 Integration with backend REST API

---

## 🔧 Technologies Used

| Technology      | Description                                |
|------------------|--------------------------------------------|
| Angular 8        | Component-based frontend framework         |
| TypeScript       | Superset of JavaScript used with Angular   |
| Angular CLI      | Angular Command Line Interface             |
| Reactive Forms   | Used for powerful form validation          |
| Angular Routing  | SPA page navigation                        |
| CSS              | Styling for UI components                  |
| HTTPClient       | Angular service to make HTTP API requests  |

---

## 🗂️ Project Structure

src/
├── app/
│ ├── components/
│ │ ├── people-list/ # Displays list of all people
│ │ ├── edit-person/ # Edit form for person details
│ │ └── confirm-delete/ # Confirm deletion dialog
│ ├── services/
│ │ └── person.service.ts # API integration service
│ ├── app.module.ts # Root Angular module
│ └── app-routing.module.ts # Routes configuration


---

## 🔗 API Integration

This frontend connects to the following backend API routes:

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/person`          | Fetch all persons        |
| PUT    | `/person/:id`      | Update a person          |
| DELETE | `/person/:id`      | Delete a person          |

> ⚠️ Ensure the backend is running on `http://localhost:3000`.

---

## ⚙️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/people-manager-angular.git
   cd people-manager-angular
Install dependencies

npm install
Run the development server

ng serve
Open in browser

http://localhost:4200
📸 Sample Screens
👥 People List Page

✏️ Edit Person Form

🗑️ Confirm Deletion Popup

🧪 Testing With Thunder Client / Postman
While the frontend doesn't directly send POST requests (handled through form submissions), you can test the API using Thunder Client or Postman with the backend.

GET: http://localhost:3000/person

PUT: http://localhost:3000/person/<id>

DELETE: http://localhost:3000/person/<id>

👨‍💻 Author
Shaik Nafeez
LinkedIn:-www.linkedin.com/in/jammalamadugu-shaik-nafeez
GitHub:-https://github.com/J-S-Nafeez?tab=repositories
