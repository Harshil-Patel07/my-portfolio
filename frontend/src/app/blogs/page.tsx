import Image from "next/image";
import React from "react";

const blog = {
  title: "Sample Blog Title",
  author: "John Doe",
  date: "June 17, 2024",
  image: "https://etimg.etb2bimg.com/photo/100088163.cms",
  content: `
    <p>This is a sample blog content. You can write your blog content here and style it accordingly using HTML and Tailwind CSS.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
    <h2>Subheading</h2>
    <p>Aliquam nec felis in metus tristique bibendum. Mauris nec ante magna. Pellentesque congue volutpat elit, et fringilla lacus. Nam auctor sit amet magna varius elementum. Etiam ut venenatis metus. Maecenas sit amet maximus magna. Integer non laoreet lacus, ut aliquam quam. Fusce dictum porta risus, at aliquet mi tincidunt ut.</p>
    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">Visit Example</a>
    <p>Check out this image:</p>
    <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" alt="Sample Image" class="my-4"/>
    <p>Here is an embedded video:</p>
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="h-[550px] rounded-xl"
      ></iframe>
  
    <h2>Another Subheading</h2>
    <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero.</p>
  `,
};

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4 text-white font-Poppins text-[1.2rem] font-thin leading-[2]">
      <div className="rounded-xl overflow-hidden border">
        <Image
          src={blog.image}
          width={1400}
          height={500}
          alt="Blog Image"
          className="w-full object-cover max-h-[450px]"
        />
      </div>
      <div className="my-[5rem]">
        <h1 className="text-3xl font-medium">{blog.title}</h1>
        <div className="text-gray-500 text-[1rem]">
          <span>By {blog.author}</span> | <span>{blog.date}</span>
        </div>
        <div
          className="mt-4 prose prose-lg [&>img]:w-full  [&>img]:object-cover [&>img]:max-h-[450px] [&>img]:my-[4rem] [&>iframe]:object-cover [&>iframe]:w-full [&>iframe]:my-[2rem] "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* conclution */}
  
     
    </div>
  );
};

export default BlogPage;
