import React from 'react';

const Blog = () => {
  return (
    <div className='min-h-screen lg:m-12 m-8 space-y-6'>
      <p className='text-center my-16 font-bold md:text-3xl text-2xl text-pink-700 lg:text-5xl'>Here is some frequently asked questions <br /> that has been prepared for you.</p>
      <p className='lg:text-3xl text-xl font-semibold'>Read these questions carefully as it is important for your career.</p>
      <div className='lg:m-12 m-4'>
        <ol className='space-y-6'>
          <li>
            <p className='lg:text-3xl md:text-2xl text-xl mb-3 font-semibold'>1. What is Difference between SQL and NoSQL?</p>
            <p className='lg:text-lg text-sm'><span className="font-semibold">Answer: </span> SQL (Structured Query Language) and NoSQL databases differ primarily in their data models, schemas, and scalability. SQL databases are relational, employing structured tables with predefined schemas, while NoSQL databases are non-relational, supporting flexible data formats. SQL databases enforce data integrity through rigid schemas, requiring careful planning and migration for schema changes, and use the SQL language for querying. They are suitable for applications with structured data and complex queries, where strong data consistency is crucial. In contrast, NoSQL databases are schema-less, allowing for easy adaptation to changing data structures, and they have their own query languages or APIs optimized for their data models. NoSQL databases excel at horizontal scalability, making them cost-effective and flexible for rapidly growing data and applications prioritizing availability over strict consistency. The choice between SQL and NoSQL should align with the specific needs of your application.
            </p>
          </li>
          <li>
            <p className='lg:text-3xl md:text-2xl text-xl mb-3 font-semibold'>2. What is JWT, and how does it work?

            </p>
            <p className='lg:text-lg text-sm'>
              <span className="font-semibold">Answer: </span>
              A JSON Web Token (JWT) is a compact and secure way to represent information between parties, often used for user authentication and authorization in web applications. It consists of three parts: a header, payload with claims, and a signature. When a user logs in, the server creates a JWT by encoding user data, signs it with a secret key, and sends it to the client. The client stores the JWT and includes it in requests. Servers use the JWT to validate the user's identity and check for data integrity by verifying the signature. It's a widely used mechanism for maintaining secure user sessions and transmitting data securely between different parts of a web application.
            </p>
          </li>
          <li>
            <p className='lg:text-3xl md:text-2xl text-xl mb-3 font-semibold'>3. What is the difference between javascript and NodeJS?</p>
            <p className='lg:text-lg text-sm'>
              <span className="font-semibold">Answer: </span>
              JavaScript is a versatile programming language commonly associated with front-end web development. It's mainly used to make websites interactive and responsive, enabling actions like form validation, animations, and handling user interactions in web browsers. JavaScript runs in the browser, executing code to manipulate web page content and respond to user input.
              Node.js, on the other hand, is a runtime environment that allows you to run JavaScript on the server side. It's not a language itself but a platform built on Chrome's V8 JavaScript engine. Node.js extends the utility of JavaScript beyond the browser, enabling developers to build server-side applications like web servers, APIs, and real-time applications. With Node.js, JavaScript can handle file I/O, network operations, and other server-related tasks, making it a robust choice for full-stack development. While both JavaScript and Node.js share the same language syntax, they are used in different contexts – JavaScript on the client side and Node.js on the server side – to create comprehensive web applications.
            </p>
          </li>
          <li>
            <p className='lg:text-3xl md:text-2xl text-xl mb-3 font-semibold'>4. How does NodeJS handle multiple requests at the same time?</p>
            <p className='lg:text-lg text-sm'>
              <span className="font-semibold">Answer: </span>
              Node.js is designed to handle multiple requests simultaneously through its non-blocking, event-driven architecture. When a request comes in, Node.js uses a single-threaded event loop to process it. Instead of waiting for one request to complete before moving to the next, Node.js efficiently delegates tasks like I/O operations to the background and continues processing other requests. This allows Node.js to handle a large number of concurrent connections without blocking the server, making it highly scalable and responsive. Additionally, Node.js can take advantage of asynchronous callbacks and Promises to manage and coordinate multiple tasks, ensuring that it can efficiently respond to numerous requests in parallel.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Blog;