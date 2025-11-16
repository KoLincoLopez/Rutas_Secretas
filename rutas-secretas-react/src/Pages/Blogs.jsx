import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/blog.css"

const BlogCard = ({ id, img, title, text }) => (
    <div className="col-md-4">
        <div className="card h-100">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text flex-grow-1">{text}</p>
                <Link to={`/blog/${id}`} className="btn btn-primary mt-auto">Leer más</Link>
            </div>
        </div>
    </div>
);

function Blogs() {
    const blogData = [
        { id: 1, title: "Ruta del Desierto", text: "Descubre los paisajes surrealistas del desierto más árido del mundo.", img: "https://picsum.photos/id/1037/800/400" },
        { id: 2, title: "Colores de Valparaíso", text: "Arte urbano, cerros vibrantes y la magia bohemia del puerto principal.", img: "https://picsum.photos/id/1039/800/400" },
        { id: 3, title: "Los Secretos del Sur", text: "Aventuras, volcanes y lagos escondidos.", img: "https://picsum.photos/id/1038/800/400" },
    ];

    return (
        <>
            <Navbar />

            <main className="container py-5">
                <h1 className="text-center my-4">Bitácoras de Viaje</h1>

                <section className="blog-list">
                    <div className="row g-4">
                        {blogData.map(blog => (
                            <BlogCard key={blog.id} {...blog} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Blogs;
