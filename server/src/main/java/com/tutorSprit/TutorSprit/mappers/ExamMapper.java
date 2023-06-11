package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.ExamBeforeDto;
import com.tutorSprit.TutorSprit.dto.ExamDto;
import com.tutorSprit.TutorSprit.entities.Exam;
import com.tutorSprit.TutorSprit.requests.AddExamRequest;
import com.tutorSprit.TutorSprit.requests.UpdateExamRequest;

@Mapper(componentModel="spring",uses=QuestionMapper.class)
public interface ExamMapper {
	
	Exam toExam(AddExamRequest addExamRequest);
	ExamDto toExamDto(Exam exam);
	ExamBeforeDto toExamBeforeDto(Exam exam);
	List<ExamDto> toExamDtoList(List<Exam> examList);
	List<ExamBeforeDto> toExamBeforeDtoList(List<Exam> examList);
	Exam toExamUpdate(Exam exam,UpdateExamRequest updateExamRequest);
	
}
