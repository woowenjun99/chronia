package com.chronia.app.service.impl;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.dto.CreateBlogDTO;
import com.chronia.app.model.vo.GetBlogsWithPaginationVO;
import com.chronia.app.service.BlogService;
import com.chronia.app.util.ThreadLocalUser;
import com.chronia.external.model.AuthenticatedUser;
import com.chronia.persistence.models.Blog;
import com.chronia.persistence.repository.BlogRepository;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class BlogServiceImpl implements BlogService {
    private final BlogRepository blogRepository;

    @Override
    public void createBlog(CreateBlogDTO request) throws ChroniaException {
        AuthenticatedUser authenticatedUser = ThreadLocalUser.getAuthenticatedUser();
        String userId = authenticatedUser.getUid();

        Blog blog = new Blog();
        blog.setContent(request.getContent());
        blog.setTitle(request.getTitle());
        blog.setUid(userId);
        blogRepository.createBlog(blog);
    }

    @Override
    public GetBlogsWithPaginationVO getBlogsWithPagination(Long pageSize, Long pageNo) throws ChroniaException {
        Long total = blogRepository.getTotalBlogs();
        List<Blog> blogs = blogRepository.getAllBlogs();
        return GetBlogsWithPaginationVO
                .builder()
                .blogs(blogs)
                .total(total)
                .build();
    }
}
