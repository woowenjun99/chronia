package com.chronia.persistence.repository;

import com.chronia.persistence.mappers.BlogEntityMapper;
import com.chronia.persistence.mappers.manual.ManualBlogMapper;
import com.chronia.persistence.models.BlogEntity;
import com.chronia.persistence.models.BlogEntityExample;
import com.chronia.persistence.models.manual.ManualBlog;

import org.springframework.stereotype.Repository;

import java.util.List;

import jakarta.annotation.Resource;

@Repository
public class BlogRepository {
    @Resource
    private BlogEntityMapper blogEntityMapper;

    @Resource
    private ManualBlogMapper manualBlogMapper;

    public void createBlog(BlogEntity blog) {
        blogEntityMapper.insertSelective(blog);
    }

    public Long getTotalBlogs() {
        BlogEntityExample example = new BlogEntityExample();
        example.createCriteria();
        return blogEntityMapper.countByExample(example);
    }

    public List<ManualBlog> getBlogsWithPagination(Long pageSize, Long pageNo, String userId) {
        return manualBlogMapper.getBlogsWithPagination(
                pageSize,
                pageSize * pageNo - pageSize,
                userId
        );
    }
}
