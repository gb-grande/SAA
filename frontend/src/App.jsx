import {Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import AdmMenu from "./pages/adm/AdmMenu.jsx";
import EditContact from "./pages/adm/EditContact.jsx";
import BlogPost from "./pages/blog/BlogPost.jsx";
import EditBlogPost from "./pages/blog/EditBlogPost.jsx";
import RegisterAdm from "./pages/adm/RegisterAdm.jsx";
import BazarPage from "./pages/blog/BazarPage.jsx";
import Login from "./pages/Login.jsx";
import axios from "axios";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ManageAdmInfos from "./pages/adm/ManageAdmInfos.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Donations from "./pages/adm/Donations.jsx";

if (import.meta.env.VITE_BACKEND_URL)
    axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
else
    console.error("No AXIOS Url for connection!")

function App() {
    return (
        <AuthProvider>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path="blog" element={<BlogPage/>}/>
                <Route path="blog/:id" element={<BlogPost/>}/>
                <Route path="bazar" element={<BazarPage/>}/>
                <Route path="bazar/:id" element={<BlogPost/>}/>
                <Route path="login" element={<Login/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>

            <Route path="/admin" element={
                <ProtectedRoute>
                    <Layout/>
                </ProtectedRoute>
            }>
                <Route index element={<AdmMenu/>}/>
                <Route path="blog/:id?" element={<EditBlogPost/>}/>
                <Route path="bazar/:id?" element={<EditBlogPost/>}/>

                <Route path="editarcontato" element={<EditContact/>}/>
                <Route path="gerenciarcadastro" element={<ManageAdmInfos/>}/>
                <Route path="cadastro" element={<RegisterAdm/>}/>
               <Route path="registrardoacoes" element={<Donations/>}/>
            </Route>

        </Routes>
        </AuthProvider>
    );
}

export default App
