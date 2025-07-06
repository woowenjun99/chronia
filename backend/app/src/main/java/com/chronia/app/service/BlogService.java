package com.chronia.app.service;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.dto.CreateBlogDTO;

public interface BlogService {
    /**
     * Create a blog post
     *
     * @param request
     * @throws ChroniaException
     */
    void createBlog(CreateBlogDTO request) throws ChroniaException;
}
