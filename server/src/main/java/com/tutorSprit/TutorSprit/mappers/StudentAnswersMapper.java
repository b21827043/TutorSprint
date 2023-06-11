package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.StudentAnswersDto;
import com.tutorSprit.TutorSprit.entities.StudentAnswers;

@Mapper(componentModel = "spring")
public interface StudentAnswersMapper {
	
	StudentAnswersDto toStudentAnswersDto(StudentAnswers studentAnswers);
	List<StudentAnswersDto> toStudentAnswersDtoList(List<StudentAnswers> studentAnswersList);
	
}
