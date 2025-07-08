package com.chronia.app.model.vo;

import com.chronia.persistence.models.manual.ManualBlog;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class GetBlogsWithPaginationVO {
    private final List<ManualBlog> blogs;
    private final Long total;
}
