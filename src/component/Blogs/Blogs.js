import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="qna">
      <div className="qna1">
        <h2>What is context API?</h2>
        <p>
          Passing data through props over and over can cause problems for your
          application. Any situation where we have to pass a prop through a
          component is where you can use the Context API. React provided this to
          solve the problem with prop-drilling. It allows us to share state
          across the entire project easily and effectively. React Context API is
          a way for a React app to effectively produce global variables and this
          is the alternative to prop drilling.
        </p>
      </div>
      <div className="qna2">
        <h2>What is semantic tag?</h2>
        <p>
          Semantic tag refers the tags which is readable by boath human being
          and machine. It is easy to understand the perpous of semantic tag ised
          in a an html document. It is not only convenient for us but also
          search engines and other assistive technologies (like screen readers
          for users with a sight impairment) are also able to better understand
          the context and content of your website, meaning a better experience
          for your users.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
