package com.chronia.app.model.vo;

import com.chronia.persistence.models.Blog;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class GetBlogsWithPaginationVO {
    private final List<Blog> blogs;
    private final Long total;
}
