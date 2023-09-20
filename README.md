<h1 align="center">
    Task Hub Web App
</h1>

## 📝 Deskripsi Web App
Task Hub Web App adalah sebuah aplikasi web yang digunakan untuk mengelola todo dan notes pengguna. Aplikasi ini menggunakan fitur authentication agar pengguna bisa mengakses datanya di mana pun dan kapan pun. 

## 📦 Fitur & Endpoint Web App
1. Create Todo <br>
    Pengguna dapat membuat todo. <br>
    Endpoint: <br>
    ````````````
    POST /api/todos
    ````````````
2. Find All Todos <br>
    Mencari semua todo yang ada di database. <br>
    Endpoint: <br>
    ````````````
    GET /api/todos
    ````````````
3. Find Todo <br>
    Mencari todo berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    GET /api/todos/:id
    ````````````
4. Edit Todo
5. Delete Todo
6. Delete all Todos
7. Filter Todo by Category
8. Filter Todo by Priority
9.  Sort Todo by Deadline
10. Sort Todo by Latest and Oldest
11. Cerate Note
12. Find All Notes
13. Find Note
14. Edit Note
15. Delete Note
16. Delete all Notes
17. Filter Note by Favorite
18. Filter Note by Topic
19. Sort Note by Latest and Oldest
20. Create / Register User
21. Login User
22. Find All Users
23. Find User
24. Delete User

## 💻 Tech Stack
- NodeJS
- ExpressJS
- MongoDB

## 👨‍💻 Step to Run Backend
1. Clone this repository
    ```````````
    git clone https://github.com/NandoAACF/task-hub-webapp
    ```````````
2. Go to backend directory
    ```````````
    cd backend
    ```````````
3. Install NPM Packages
    ```````````
    npm install
    ```````````
4. Run App
    ```````````
    nodemon
    ```````````
5. Access the API via Postman Documentation
    ```````````
    TBA
    ```````````
