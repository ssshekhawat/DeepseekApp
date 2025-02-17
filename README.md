# **DeepSeek Chat Application**  

This is a full-stack application integrating **DeepSeek-R1** for AI-powered conversations. The **backend** is built with Node.js and Express, serving as an API layer for DeepSeek-R1, while the **frontend** is a React.js application providing a user-friendly chat interface.  

---

## **🚀 Getting Started**  

Follow the steps below to set up and run the backend and frontend applications.  

## **📌 Backend Setup (`deepseekbackend`)**  

The backend application serves as a bridge between the frontend and **DeepSeek-R1**, handling API requests and responses.  

## **1️⃣ Initialize the Project**

Create a new directory and initialize a Node.js project:  
```sh
mkdir deepseekbackend && cd deepseekbackend
npm init -y
```

## **2️⃣ Install Dependencies** 

Install the required Node.js packages:
```sh
npm install express cors axios dotenv
```
* express → Web framework for handling API requests
* cors → Enables Cross-Origin Resource Sharing
* axios → Used for making HTTP requests to DeepSeek-R1
* dotenv → Manages environment variables
  
## **3️⃣ Run the Backend Server**

```sh
node server.js
```
The backend will start, typically on port 5000.

## **4️⃣ Ensure DeepSeek-R1 is Running**

Before making API requests, ensure that DeepSeek-R1 is running locally:
```sh
ollama run deepseek-r1
```
By default, it runs on http://localhost:11434

---
## **📌 Frontend Setup (`deepseekfrontend`)**

The frontend is a React.js application that provides a UI for interacting with the AI model.

