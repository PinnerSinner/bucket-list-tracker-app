# 🎯 Bucket List Tracker  

*Stay motivated and track your life goals effortlessly!*

A **React-powered** bucket list web app built with **AWS Amplify, AWS AppSync, AWS DynamoDB, and Amazon S3**. This app allows users to **create, update, and manage** their bucket list items while ensuring authentication via **Amazon Cognito**.

[🚀 **Live Demo**](https://main.dc2nlltqlji8s.amplifyapp.com/)  

---

## 📝 A Quick Look at the Web App  

When you open **Bucket List Tracker**, you're welcomed into a sleek, modern interface where you can **log in, add goals, upload images, and track your progress**. The entire frontend, from the user-friendly interface to the seamless API interactions, is powered by **AWS Amplify**, ensuring a smooth experience without complex backend management.  

Add your personal goals, update progress, and remove completed wishes effortlessly. With **GraphQL-powered API interactions**, data synchronization happens seamlessly, making every update feel instant.

### 🖼️ **Screenshot Preview**  
![Bucket List Tracker](![alt text](image.png))

---

## 🏗️ Architecture Overview  

### **How It Works**  

✔️ **User Authentication:** Secure login/sign-up handled by **AWS Cognito**  
✔️ **Frontend:** A **React app** deployed via **AWS Amplify Hosting**  
✔️ **Backend:** Uses **AWS AppSync** and **GraphQL API** for bucket list management  
✔️ **Database:** **DynamoDB** for a scalable, high-performance NoSQL database  
✔️ **File Storage:** Images are uploaded and stored in **Amazon S3**  

---

## 🛠 Service Breakdown  

| Service            | Purpose                                |
| ------------------ | -------------------------------------- |
| **AWS Amplify**    | Hosts & deploys the web app            |
| **Amazon Cognito** | Handles user authentication & security |
| **AWS AppSync**    | GraphQL API management                 |
| **AWS DynamoDB**   | Stores bucket list data                |
| **Amazon S3**      | Stores user-uploaded images            |

---

## 🚀 How It Works (Under the Hood)  

Once a user logs in via **Cognito**, they can start adding their bucket list items. These entries are stored in **DynamoDB**, with all interactions happening through **AWS AppSync's GraphQL API**.

For an enhanced experience, users can upload images of their completed goals, which are securely stored in **Amazon S3**. **Amplify** ensures that everything from frontend to backend works smoothly without manual infrastructure management.

---

## 🛠️ Setup & Deployment  

Want to run this locally? Here's how:

### **Prerequisites**  
- Node.js & npm installed  
- AWS Amplify CLI configured  
- Git installed  

### **Clone & Install**  

```bash
# Clone the repository
git clone https://github.com/PinnerSinner/bucket-list-tracker-app.git
cd bucket-list-tracker-app

# Install dependencies
npm install
