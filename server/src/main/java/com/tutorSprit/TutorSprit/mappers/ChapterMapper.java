package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.ChapterDto;
import com.tutorSprit.TutorSprit.dto.StudentAnalysisChapterDto;
import com.tutorSprit.TutorSprit.entities.Chapter;
import com.tutorSprit.TutorSprit.requests.AddChapterRequest;
import com.tutorSprit.TutorSprit.requests.UpdateChapterRequest;

@Mapper(componentModel = "spring",uses= SubChapterMapper.class)
public interface ChapterMapper {
	
	Chapter toChapter(AddChapterRequest addChapterRequest);
	ChapterDto toChapterDto(Chapter chapter);
	List<ChapterDto> toChapterDtoList(List<Chapter> chapterList);
	
	Chapter toChapterUpdate(Chapter chapter,UpdateChapterRequest updateChapterRequest);
	
	StudentAnalysisChapterDto toStudentAnalysisChapterDto(Chapter chapter);
	List<StudentAnalysisChapterDto> toStudentAnalysisChapterDtoList(List<Chapter> chapter);
	
}
