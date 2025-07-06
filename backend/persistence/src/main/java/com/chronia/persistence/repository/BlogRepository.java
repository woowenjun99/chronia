package com.chronia.persistence.repository;

import com.chronia.persistence.mappers.BlogMapper;
import com.chronia.persistence.models.Blog;

import org.springframework.stereotype.Repository;

import jakarta.annotation.Resource;

@Repository
public class BlogRepository {
    @Resource
    private BlogMapper blogMapper;

    public void createBlog(Blog blog) {
        blogMapper.insertSelective(blog);
    }
}
