# Blog API

A simple **RESTful API** built with **Node.js**, **Express.js**, and **MongoDB** to power a personal blogging platform.  
This project supports full **CRUD** functionality for blog articles and is designed to help me strengthen my backend development skills.

![Personal Blogging Platform API Diagram}](/assets/blog-api-diagram.png)

---

## 📌 Project Overview

The **Personal Blogging Platform API** allows for creating, reading, updating, and deleting blog articles stored in a MongoDB database.  
It is the backend service that would sit behind a blog's user interface, handling data and business logic.

This project is part of my learning journey with **Node.js**, **Express.js**, and **MongoDB**, and it’s helping me:
- Understand how RESTful APIs are structured.
- Practice database interactions with MongoDB.
- Improve at organizing backend project code.

---

## 🚀 Features

- **Create** a new article.
- **Read**:
  - Get all articles.
  - Get a specific article by ID.
  - Optional filtering by date or tags.
- **Update** an article by ID.
- **Delete** an article by ID.
- JSON-based API responses.

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime.
- **Express.js** – Web framework for building the API.
- **MongoDB** – NoSQL database for storing blog articles.

---

## 📂 API Endpoints

| Method | Endpoint          | Description                         |
|--------|-------------------|-------------------------------------|
| GET    | `/articles`       | Get all articles                    |
| GET    | `/articles/:id`   | Get a single article by ID          |
| POST   | `/articles`       | Create a new article                |
| PUT    | `/articles/:id`   | Update an article by ID             |
| DELETE | `/articles/:id`   | Delete an article by ID             |