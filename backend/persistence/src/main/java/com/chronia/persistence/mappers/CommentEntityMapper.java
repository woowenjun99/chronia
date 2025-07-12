package com.chronia.persistence.mappers;

import com.chronia.persistence.models.CommentEntity;
import com.chronia.persistence.models.CommentEntityExample;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CommentEntityMapper {
    long countByExample(CommentEntityExample example);

    int deleteByExample(CommentEntityExample example);

    int deleteByPrimaryKey(Long id);

    int insert(CommentEntity row);

    int insertSelective(CommentEntity row);

    List<CommentEntity> selectByExample(CommentEntityExample example);

    CommentEntity selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("row") CommentEntity row, @Param("example") CommentEntityExample example);

    int updateByExample(@Param("row") CommentEntity row, @Param("example") CommentEntityExample example);

    int updateByPrimaryKeySelective(CommentEntity row);

    int updateByPrimaryKey(CommentEntity row);
}