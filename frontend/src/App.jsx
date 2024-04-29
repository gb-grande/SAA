import {Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import AdmMenu from "./pages/AdmMenu.jsx";
import EditContact from "./pages/EditContact.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import EditBlogPost from "./pages/EditBlogPost.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="blog" element={<BlogPage/>}/>
                <Route path="blog/:id" element={<BlogPost/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>

            <Route path="/admin" element={<Layout/>}>
                <Route index element={<AdmMenu/>}/>
                <Route path="blog/:id?" element={<EditBlogPost/>}/>
            </Route>

            <Route path="/editarcontato" element={<Layout/>}>
                <Route index element={<EditContact/>}/>
            </Route>
        </Routes>
    );
}

export default App
