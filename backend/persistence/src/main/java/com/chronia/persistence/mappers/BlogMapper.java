package com.chronia.persistence.mappers;

import com.chronia.persistence.models.Blog;
import com.chronia.persistence.models.BlogExample;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BlogMapper {
    long countByExample(BlogExample example);

    int deleteByExample(BlogExample example);

    int deleteByPrimaryKey(Long id);

    int insert(Blog row);

    int insertSelective(Blog row);

    List<Blog> selectByExample(BlogExample example);

    Blog selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("row") Blog row, @Param("example") BlogExample example);

    int updateByExample(@Param("row") Blog row, @Param("example") BlogExample example);

    int updateByPrimaryKeySelective(Blog row);

    int updateByPrimaryKey(Blog row);
}
