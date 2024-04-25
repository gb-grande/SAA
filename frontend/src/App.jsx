import {Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import BlogPost from "./pages/BlogPost.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="blog/:id" element={<BlogPost/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App
