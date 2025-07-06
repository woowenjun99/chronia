package com.chronia.app.service;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.dto.CreateBlogDTO;
import com.chronia.app.model.vo.GetBlogsWithPaginationVO;

public interface BlogService {
    /**
     * Create a blog post
     *
     * @param request
     * @throws ChroniaException
     */
    void createBlog(CreateBlogDTO request) throws ChroniaException;

    /**
     * Gets paginated blogs with the total results
     *
     * @param pageSize The size of the response
     * @param pageNo The offset
     * @return
     * @throws ChroniaException
     */
    GetBlogsWithPaginationVO getBlogsWithPagination(Long pageSize, Long pageNo) throws ChroniaException;
}
