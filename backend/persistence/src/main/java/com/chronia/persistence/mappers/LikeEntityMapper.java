package com.chronia.persistence.mappers;

import com.chronia.persistence.models.LikeEntity;
import com.chronia.persistence.models.LikeEntityExample;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface LikeEntityMapper {
    long countByExample(LikeEntityExample example);

    int deleteByExample(LikeEntityExample example);

    int deleteByPrimaryKey(Long id);

    int insert(LikeEntity row);

    int insertSelective(LikeEntity row);

    List<LikeEntity> selectByExample(LikeEntityExample example);

    LikeEntity selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("row") LikeEntity row, @Param("example") LikeEntityExample example);

    int updateByExample(@Param("row") LikeEntity row, @Param("example") LikeEntityExample example);

    int updateByPrimaryKeySelective(LikeEntity row);

    int updateByPrimaryKey(LikeEntity row);
}
