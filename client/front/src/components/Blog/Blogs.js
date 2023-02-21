import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../../redux/actions/actionIndex";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/pagination";
import NavBar from "../NavBar/NavBar";
import Blog from "./Blog";
import s from "./Blogs.module.css";

export default function Blogs() {
  const blogs = useSelector((state) => state.blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsXPage, setBlogXPage] = useState(3);
  const iLastBlog = currentPage * blogsXPage;
  const iFirstBlog = iLastBlog - blogsXPage;
  const currentBlogs = blogs.slice(iFirstBlog, iLastBlog);
  const currentPages = blogs.length / blogsXPage;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const nextPage = () => {
    if (currentPages > currentPage) setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <NavBar />
      <div className={s.titleBlog}>
        <div className={s.BlogTitle}>
          <h1>
            <u>BLOG!</u>
          </h1>
        </div>
        <div className={s.BlogText}>
          <h3>
            Welcome to our blog section! As a nursery, we are passionate about
            all things related to plants and gardening, and we are thrilled to
            have this platform to share our knowledge and expertise with you. In
            this space, we'll be sharing tips and tricks on plant care,
            gardening trends, and ideas to help you create a beautiful and
            thriving green space in your home or office. We also invite you to
            join our community by sharing your own experiences and content that
            you think would be helpful or inspiring to other plant lovers. We
            hope you find our blog informative and enjoyable, and we look
            forward to growing together in our love for all things green and
            growing!
          </h3>
        </div>
      </div>
      <div className={s.BlogBody}>
        <button onClick={previousPage} className={s.blogButton}>
          <b>Previous</b>
        </button>
        {currentBlogs?.length
          ? currentBlogs.map((blog, key) => {
              return <Blog key={key} blog={blog} />;
            })
          : null}
        <button onClick={nextPage} className={s.blogButton}>
          <b>Next</b>
        </button>
      </div>
      <Pagination
        productsXPage={blogsXPage}
        plants={blogs.length}
        pagination={pagination}
        currentPage={currentPage}
        notShow={true}
      />
      <Footer />
    </div>
  );
}
