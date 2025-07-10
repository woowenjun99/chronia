package com.chronia.persistence.mappers;

import com.chronia.persistence.models.BlogEntity;
import com.chronia.persistence.models.BlogEntityExample;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BlogEntityMapper {
    long countByExample(BlogEntityExample example);

    int deleteByExample(BlogEntityExample example);

    int deleteByPrimaryKey(Long id);

    int insert(BlogEntity row);

    int insertSelective(BlogEntity row);

    List<BlogEntity> selectByExample(BlogEntityExample example);

    BlogEntity selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("row") BlogEntity row, @Param("example") BlogEntityExample example);

    int updateByExample(@Param("row") BlogEntity row, @Param("example") BlogEntityExample example);

    int updateByPrimaryKeySelective(BlogEntity row);

    int updateByPrimaryKey(BlogEntity row);
}
