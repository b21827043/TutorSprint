package com.tutorSprit.TutorSprit.dto;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CourseDto {
	
	private long courseId;
	
	private String courseName;
	private String courseIntroText;
	private int level;
	private List<ChapterDto> chapterDtoList;
	
	
}
