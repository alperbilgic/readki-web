// pages/blogs.tsx
import React, {useState, useEffect, useCallback} from 'react';
import {Container, Grid, CircularProgress} from '@mui/material';
import {BlogCard} from "@/components/blog/BlogCard";
import {useRouter} from "next/router";

const fetchBlogs = async (page: number, languageCode: string) => {
  const category = languageCode === 'en' ? 'child' : 'cocuk';
  const response = await fetch(`https://api.kidolog.com/api/Home/GetBlogs?CategorySlug=${category}&Page=${page}&Size=20`, {headers: {'Content-Language': languageCode}});
  const data = await response.json();
  return data.blogs;
};

const BlogsPage = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreBlogs = async (locale: string) => {
    if (loading || !hasMore) return;
    setLoading(true);
    const newBlogs = await fetchBlogs(page, locale);
    if (page === 1) {
      setPage(1);
      setHasMore(true);
      setBlogs(newBlogs);
    } else {
      setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
    }
    setLoading(false);
    setPage((prevPage) => prevPage + 1);
    if (newBlogs.length === 0) setHasMore(false);
  };

  useEffect(() => {
    loadMoreBlogs(router.locale ?? "tr");
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadMoreBlogs(router.locale ?? "tr");
  }, []);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [router.locale]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && hasMore) {
        console.log("handle scroll")
        loadMoreBlogs(router.locale ?? "tr");
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreBlogs, hasMore]);

  return (
    <Container>
      <Grid container spacing={2}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard blogInfo={blog}/>
          </Grid>
        ))}
      </Grid>
      {loading && (
        <Grid container justifyContent="center">
          <CircularProgress/>
        </Grid>
      )}
    </Container>
  );
};

export default BlogsPage;
