import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <h1 className='text-secondary fw-bold text-center'>Tech Blog</h1>
            <div className="grid-blog">
                <div className="first-ques">
                    <h2 className='text-success fw-bold text-center'>Difference Between Javascript and NodeJs.</h2>
                    <p> <span className='text-warning fw-bold'>JavaScript : </span>
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                        <span className='text-warning fw-bold'>NodeJS :</span>
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                </div>
                <div className="second-ques">
                    <h2 className='text-success fw-bold text-center'>When you should use MongoDB and when you should use NodeJs.</h2>
                    <p> MongoDB is a flexible, general-purpose document database that is ideally suited for modern applications.. Node.js is a JavaScript runtime that commonly powers web servers. Developers can use these two pieces of technology, along with MongoDB Atlas, a fully managed, multi-cloud database service, to rapidly create modern applications. </p>
                </div>
                <div className='third-ques'>
                    <h2 className='text-success fw-bold text-center'>Difference Between SQL and NOSQL database</h2>
                    <p>SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it.
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first.</p>
                </div>
                <div className="fourth-ques">
                    <h2 className='text-success fw-bold text-center'>What is the purpose of the Jwt token and how does it work?</h2>
                    <p>In the old days of the web, authentication was a pure stateful affair. With an centralized overlord entity being responsible for tokens, the world was fairly simple:

                        Tokens are issued and stored in a single service for future checking and revocation,
                        Clients and resource servers know a single point of truth for token verification and information gathering.
                        This worked rather well in a world of integrated systems (some might call them legacy app, mothership or simply Jimmy), when servers rendered frontends and dependencies existed on e.g. package-level and not between independently deployed applications.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;