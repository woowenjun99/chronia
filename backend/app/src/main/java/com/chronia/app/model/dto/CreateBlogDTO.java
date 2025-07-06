package com.chronia.app.model.dto;

import lombok.Data;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Data
public class CreateBlogDTO {
    @NotNull
    @NotEmpty
    private String content;

    @NotEmpty
    @NotNull
    private String title;
}
