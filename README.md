<h1 align="center">
    Taskify Web App
</h1>

## 📝 Deskripsi Web App
Taskify Web App adalah sebuah aplikasi web yang digunakan untuk mengelola todo dan notes pengguna. Aplikasi ini menggunakan fitur authentication agar pengguna bisa mengakses datanya di mana pun dan kapan pun. 

## 🔥 API Documentation Postman **(Wajib Dibaca)**
**https://documenter.getpostman.com/view/29914685/2s9YCASWgw**

## 📦 Fitur & Endpoint Web App
1.  Create / Register User <br>
    Pengguna dapat membuat akun. <br>
    Endpoint: <br>
    ````````````
    POST /api/users/register
    ````````````
2.  Login User <br>
    Pengguna dapat login ke akun. <br>
    Endpoint: <br>
    ````````````
    POST /api/users/login
    ````````````
3.  Find All Users <br>
    Mencari semua user yang ada di database. <br>
    Endpoint: <br>
    ````````````
    GET /api/users
    ````````````
4.  Find User By ID <br>
    Mencari user berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    GET /api/users/:id
    ````````````
5.  Delete User By ID <br>
    Menghapus user berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/users/:id
    ````````````
6. Create Todo <br>
    Pengguna dapat membuat todo. <br>
    Endpoint: <br>
    ````````````
    POST /api/todos
    ````````````
7. Find All Todos <br>
    Mencari semua todo yang ada di database. <br>
    Endpoint: <br>
    ````````````
    GET /api/todos
    ````````````
8. Find Todo <br>
    Mencari todo berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    GET /api/todos/:id
    ````````````
9. Edit Todo <br>
    Mengedit todo berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    PUT /api/todos/:id
    ````````````
10. Delete Todo by ID <br>
    Menghapus todo berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/todos/:id
    ````````````
11. Delete Todos By User ID <br>
    Menghapus semua todo milik seorang user yang ada di database. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/todos/list/:userId
    ````````````
12. Filter Todos By UserId <br>
    Mendapatkan daftar todos berdasarkan id user dan juga bisa filtering berdasarkan query yang dimasukkan, opsinya berupa kategori, deadline, dan urutan <br>
    Endpoint: <br>
    ````````````
    GET /api/todos/list/:userId
    GET /api/todos/list/:userId?sortBy=latest&deadline=asc&category=Kuliah
    ````````````
13. Filter Todo by Category <br>
    Menampilkan todo berdasarkan kategori. <br>
    Endpoint: <br>
    ````````````
    GET /api/todos/category/:category
    ````````````
14. Filter Todo by Priority <br>
    Menampilkan todo berdasarkan prioritas (High, Medium, Low) <br>
    Endpoint: <br>
    ````````````
    GET /api/todos/priority/:priority
    ````````````
15. Sort Todo by Deadline <br>
    Mengurutkan todo berdasarkan deadline (Ascending dan Descending) <br>
    Endpoint untuk Ascending: <br>
    ````````````
    GET /api/todos/sortdeadlineasc
    ````````````
    Endpoint untuk Descending: <br>
    ````````````
    GET /api/todos/sortdeadlinedesc
    ````````````
16. Sort Todo by Latest and Oldest <br>
    Mengurutkan todo berdasarkan tanggal terakhir diupdate (Oldest dan Latest) <br>
    Endpoint untuk Oldest: <br>
    ````````````
    GET /api/todos/sortbyoldest
    ````````````
    Endpoint untuk Latest: <br>
    ````````````
    GET /api/todos/sortbylatest
    ````````````
17. Create Note <br>
    Pengguna dapat membuat note. <br>
    Endpoint: <br>
    ````````````
    POST /api/notes
    ````````````
18. Find All Notes <br>
    Mencari semua note yang ada di database. <br>
    Endpoint: <br>
    ````````````
    GET /api/notes
    ````````````
19. Find Note <br>
    Mencari note berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    GET /api/notes/:id
    ````````````
20. Edit Note <br>
    Mengedit note berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    PUT /api/notes/:id
    ````````````
21. Delete Note <br>
    Menghapus note berdasarkan id. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/notes/:id
    ````````````
22. Delete Notes by User ID <br>
    Menghapus semua note milik seorang user yang ada di database. <br>
    Endpoint: <br>
    ````````````
    DELETE /api/notes/list/:userId
    ````````````
23. Filter Notes By UserId <br>
    Mendapatkan daftar notes berdasarkan id user dan juga bisa filtering berdasarkan query yang dimasukkan, opsinya berupa favorite, topik, dan urutan<br>
    Endpoint: <br>
    ````````````
    GET /api/notes/list/:userId
    GET /api/notes/list/:userId?sortBy=latest&favorite=true&topic=Daily
    ````````````
24. Filter Note by Favorite <br>
    Menampilkan note yang diberi tanda favorite <br>
    Endpoint untuk true: <br>
    ````````````
    GET /api/notes/filterfavorite
    ````````````
25. Filter Note by Topic <br>
    Menampilkan note berdasarkan topik <br>
    Endpoint: <br>
    ````````````
    GET /api/notes/filtertopic/:topic
    ````````````
26. Sort Note by Latest and Oldest <br>
    Mengurutkan note berdasarkan tanggal terakhir diupdate (Oldest dan Latest) <br>
    Endpoint untuk Oldest: <br>
    ````````````
    GET /api/notes/sortbyoldest
    ````````````
    Endpoint untuk Latest: <br>
    ````````````
    GET /api/notes/sortbylatest
    ````````````
27. Upload File <br>
    Mengunggah file dalam format jpg atau png <br>
    Endpoint: <br>
    ````````````
    POST /api/upload
    ````````````
28. Akses File <br>
    Mengakses file dalam format jpg atau png yang sudah diupload sebelumnya dan tersimpan di folder uploads <br>
    Endpoint: <br>
    ````````````
    POST /api/images/{namaFile}
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
5. Understand the API via Postman Documentation **(please read this for better understanding)**
    https://documenter.getpostman.com/view/29914685/2s9YCASWgw

## Thank you 😀