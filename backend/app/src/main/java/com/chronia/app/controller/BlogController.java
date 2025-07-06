package com.chronia.app.controller;

import com.chronia.app.model.ChroniaException;
import com.chronia.app.model.dto.CreateBlogDTO;
import com.chronia.app.model.vo.GetBlogsWithPaginationVO;
import com.chronia.app.service.BlogService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping("/blogs")
public class BlogController {
    private final BlogService blogService;

    @PostMapping
    public void createBlog(@Valid @RequestBody CreateBlogDTO request) throws ChroniaException {
        blogService.createBlog(request);
    }

    @GetMapping
    public GetBlogsWithPaginationVO getBlogsWithPagination(
            @RequestParam("pageSize") Long pageSize, @RequestParam("pageNo") Long pageNo) throws ChroniaException {
        return blogService.getBlogsWithPagination(pageSize, pageNo);
    }
}
