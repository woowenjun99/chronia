package com.chronia.persistence.mappers.manual;

import com.chronia.persistence.models.manual.ManualBlog;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ManualBlogMapper {
    List<ManualBlog> getBlogsWithPagination(
            @Param("pageSize") Long pageSize,
            @Param("offset") Long offset,
            @Param("userId") String userId);
}
