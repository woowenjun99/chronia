package com.chronia.persistence.repository;

import com.chronia.persistence.mappers.BlogMapper;
import com.chronia.persistence.models.Blog;
import com.chronia.persistence.models.BlogExample;

import org.springframework.stereotype.Repository;

import java.util.List;

import jakarta.annotation.Resource;

@Repository
public class BlogRepository {
    @Resource
    private BlogMapper blogMapper;

    public void createBlog(Blog blog) {
        blogMapper.insertSelective(blog);
    }

    public Long getTotalBlogs() {
        BlogExample example = new BlogExample();
        example.createCriteria();
        return blogMapper.countByExample(example);
    }

    public List<Blog> getAllBlogs() {
        BlogExample example = new BlogExample();
        example.createCriteria();
        return blogMapper.selectByExample(example);
    }
}
