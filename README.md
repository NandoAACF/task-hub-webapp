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
4. Edit Todo <br>
    Mengedit todo berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    PUT /api/todos/:id
    ````````````
5. Delete Todo <br>
    Menghapus todo berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/todos/:id
    ````````````
6. Delete all Todos <br>
    Menghapus semua todo yang ada di database. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/todos
    ````````````
7. Filter Todo by Category <br>
    Menampilkan todo berdasarkan kategori. <br>
    Endpoint: <br>
    ````````````
    GET /api/todos/category/:category
    ````````````
8. Filter Todo by Priority <br>
    Menampilkan todo berdasarkan prioritas (High, Medium, Low) <br>
    Endpoint: <br>
    ````````````
    GET /api/todos/priority/:priority
    ````````````
9.  Sort Todo by Deadline <br>
    Mengurutkan todo berdasarkan deadline (Ascending dan Descending) <br>
    Endpoint untuk Ascending: <br>
    ````````````
    GET /api/todos/sortdeadlineasc
    ````````````
    Endpoint untuk Descending: <br>
    ````````````
    GET /api/todos/sortdeadlinedesc
    ````````````
10. Sort Todo by Latest and Oldest <br>
    Mengurutkan todo berdasarkan tanggal terakhir diupdate (Oldest dan Latest) <br>
    Endpoint untuk Oldest: <br>
    ````````````
    GET /api/todos/sortbyoldest
    ````````````
    Endpoint untuk Latest: <br>
    ````````````
    GET /api/todos/sortbylatest
    ````````````
11. Create Note <br>
    Pengguna dapat membuat note. <br>
    Endpoint: <br>
    ````````````
    POST /api/notes
    ````````````
12. Find All Notes <br>
    Mencari semua note yang ada di database. <br>
    Endpoint: <br>
    ````````````
    GET /api/notes
    ````````````
13. Find Note <br>
    Mencari note berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    GET /api/notes/:id
    ````````````
14. Edit Note <br>
    Mengedit note berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    PUT /api/notes/:id
    ````````````
15. Delete Note <br>
    Menghapus note berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/notes/:id
    ````````````
16. Delete all Notes <br>
    Menghapus semua note yang ada di database. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/notes
    ````````````
17. Filter Note by Favorite <br>
    Menampilkan note yang diberi tanda favorite <br>
    Endpoint untuk true: <br>
    ````````````
    GET /api/notes/filterfavorite
    ````````````
18. Filter Note by Topic <br>
    Menampilkan note berdasarkan topik <br>
    Endpoint: <br>
    ````````````
    GET /api/notes/filtertopic/:topic
    ````````````
19. Sort Note by Latest and Oldest <br>
    Mengurutkan note berdasarkan tanggal terakhir diupdate (Oldest dan Latest) <br>
    Endpoint untuk Oldest: <br>
    ````````````
    GET /api/notes/sortbyoldest
    ````````````
    Endpoint untuk Latest: <br>
    ````````````
    GET /api/notes/sortbylatest
    ````````````
20. Create / Register User <br>
    Pengguna dapat membuat akun. <br>
    Endpoint: <br>
    ````````````
    POST /api/users/register
    ````````````
21. Login User <br>
    Pengguna dapat login ke akun. <br>
    Endpoint: <br>
    ````````````
    POST /api/users/login
    ````````````
22. Find All Users <br>
    Mencari semua user yang ada di database. <br>
    Endpoint: <br>
    ````````````
    GET /api/users
    ````````````
23. Find User <br>
    Mencari user berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    GET /api/users/:id
    ````````````
24. Delete User <br>
    Menghapus user berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/users/:id
    ````````````

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
