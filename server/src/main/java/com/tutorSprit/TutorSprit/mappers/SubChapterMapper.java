package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.StudentAnalysisSubChapterDto;
import com.tutorSprit.TutorSprit.dto.SubChapterDto;
import com.tutorSprit.TutorSprit.entities.SubChapter;
import com.tutorSprit.TutorSprit.requests.AddSubChapterRequest;
import com.tutorSprit.TutorSprit.requests.UpdateSubChapterRequest;

@Mapper(componentModel = "spring",uses=QuestionMapper.class)
public interface SubChapterMapper {

	SubChapter toSubChapter(AddSubChapterRequest addSubChapterRequest);
	SubChapterDto toSubChapterDto(SubChapter subChapter);
	List<SubChapterDto> toSubChapterDtoList(List<SubChapter> subChapterList);
	
	SubChapter toSubChapterUpdate(SubChapter subChapter,UpdateSubChapterRequest updateSubChapterRequest);
	
	StudentAnalysisSubChapterDto toStudentAnalysisSubChapterDto(SubChapter subChapter);
	List<StudentAnalysisSubChapterDto> toStudentAnalysisSubChapterDtoList(List<SubChapter> subChapterList);
}
