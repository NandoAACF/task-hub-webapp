// import { NextResponse } from "next/server";

// export default function middleware(req) {
//     const authToken = req.cookies;
//     let url = req.url; 
  
//     if (!authToken && url.includes('/todos')) {
//       return NextResponse.redirect('http://localhost:3000/login');
//     }
    
//     return NextResponse.next();
//   }