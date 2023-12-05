<h1 align="center">
    Taskify Web App
</h1>

## 🔗All Links
- **Deployed Website:** https://taskify-platform.vercel.app/ 
- **Deployment Repository Github:** https://github.com/HizkiaJoyIvan/task-hub-webapp 
- **Link Video Presentasi:**
- **Link Google Slide:**
- **Link API Documentation Postman:** https://documenter.getpostman.com/view/29914685/2s9YCASWgw
- **Backend URL:** https://task-hub-webapp-api.vercel.app/ 

## 📝 Deskripsi Web App
Taskify Web App adalah sebuah aplikasi web yang digunakan untuk mengelola todo dan notes pengguna. Aplikasi ini menggunakan fitur authentication dan authorization supaya pengguna bisa mengakses datanya di mana pun dan kapan pun sesuai hak aksesnya. <br>

## 🔥 API Documentation Postman **(Wajib Dibaca)**
**https://documenter.getpostman.com/view/29914685/2s9YCASWgw** <br>

## 📦 Fitur & Endpoint Web App
1.  Create / Register User <br>
    Pengguna dapat membuat akun. <br>
    Endpoint: <br>
    ````````````
    POST /api/auth/register
    ````````````
2.  Login User <br>
    Pengguna dapat login ke akun. <br>
    Endpoint: <br>
    ````````````
    POST /api/auth/login
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
    Mendapatkan daftar todos berdasarkan id user <br>
    Endpoint: <br>
    ````````````
    GET /api/todos/list/:userId
    ````````````
    Mendapatkan daftar todos berdasarkan id user dan juga bisa filtering berdasarkan query yang dimasukkan, opsinya berupa kategori, deadline, urutan, prioritas, dan status <br>
    Endpoint dengan query kategori, nilai kategori bisa bernilai apa saja: <br>
    ```````````` 
    GET /api/todos/list/:userId?category=Kuliah
    ````````````
    Endpoint dengan query prioritas, nilai prioritas diantaranya low, medium, dan high: <br>
    ```````````` 
    GET /api/todos/list/:userId?priority=low
    ````````````
    Endpoint dengan query urutan, nilai urutan diantaranya oldest dan latest: <br>
    ```````````` 
    GET /api/todos/list/:userId?sortBy=oldest
    ````````````
    Endpoint dengan query status, nilai status diantaranya Hold, InProgress, dan Done: <br>
    ```````````` 
    GET /api/todos/list/:userId?status=Hold
    ````````````
    Endpoint dengan query deadline, nilai status diantaranya asc dan desc: <br>
    ```````````` 
    GET /api/todos/list/:userId?deadline=asc
    ````````````
    Bisa menggabungkan lebih dari satu query dimana opsi filter bisa dua hingga lima <br>
    Endpoint dengan contoh query lebih dari satu: <br>
    ```````````` 
    GET /api/todos/list/:userId?deadline=asc&status=Hold&sortBy=oldest
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
    ````````````
    Mendapatkan daftar todos berdasarkan id user dan juga bisa filtering berdasarkan query yang dimasukkan, opsinya berupa kategori, deadline, urutan, prioritas, dan status <br>
    Endpoint dengan query favorit, nilai favorit hanya untuk yang bernilai true saja <br>
    ```````````` 
    GET /api/notes/list/:userId?favorite=true
    ````````````
    Endpoint dengan query topik, nilai topik bisa bernilai apa saja selama ada: <br>
    ```````````` 
    GET /api/notes/list/:userId?topic=Motivasi
    ````````````
    Endpoint dengan query urutan, nilai urutan diantaranya oldest dan latest: <br>
    ```````````` 
    GET /api/notes/list/:userId?sortBy=oldest
    ````````````
    Bisa menggabungkan lebih dari satu query dimana opsi filter bisa dua hingga tiga <br>
    Endpoint dengan contoh query lebih dari satu: <br>
    ```````````` 
    GET /api/notes/list/:userId?favorite=true&topic=Motivasi&sortBy=latest
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
29. Update User <br>
    Mengupdate attribut dari user <br>
    Endpoint: <br>
    ````````````
    PUT /api/users/:id
    ````````````
30. Forgot Password <br>
    Mengirimkan link reset password ke email user. Setelah klik akan diarahkan ke halaman untuk reset password, desainnya ada di folder views/resetPassword.ejs <br>
    Endpoint: <br>
    ````````````
    POST /api/auth/forgot-password
    ````````````
31. Reset Password <br>
    Melakukan reset password <br>
    Endpoint: <br>
    ````````````
    POST /api/auth/reset-password/:id
    ````````````

## 💻 Tech Stack
- NodeJS
- ExpressJS
- MongoDB
- NextJs
- TailwindCSS

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

## 👨‍💻 Step to Run Frontend
1. Go to backend directory
    ```````````
    cd frontend
    ```````````
2. Install NPM Packages
    ```````````
    npm install
    ```````````
3. Run App
    ```````````
    npm run dev
    ```````````
4. You will be redirected to login page, you can register first if you don't have an account.


## Thank You 😀
