import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='m-20'>
            <h2 className='text-4xl text-center font-bold text-blue-600 mb-7'>Explore Your Knowledge</h2>
            <div className='blog my-3'>
                <h5 className='text-xl font-bold'>1. Difference between SQL and NoSQL?</h5>
                <p><small>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br />
                SQL databases are primarily called as Relational Databases(RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </small></p>
            </div>
            <div className='blog my-3'>
                <h5  className='text-xl font-bold'>2. What is JWT, and how does it work?</h5>
                <p><small>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />
                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                </small></p>
            </div>
            <div className='blog my-3'>
                <h5  className='text-xl font-bold'>3. What is the difference between javascript and NodeJS?</h5>
                <p><small>
                    1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br />
                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <br />
                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.

                </small></p>
            </div>
            <div className='blog my-3'>
                <h5  className='text-xl font-bold'>4. How does NodeJS handle multiple requests at the same time?</h5>
                <p><small>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                </small></p>
            </div>           
        </div>
    );
};

export default Blogs;