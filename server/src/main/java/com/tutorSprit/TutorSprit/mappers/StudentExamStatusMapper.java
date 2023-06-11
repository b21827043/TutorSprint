package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.StudentExamStatusDto;
import com.tutorSprit.TutorSprit.entities.StudentExamStatus;

@Mapper(componentModel = "spring",uses=StudentAnswersMapper.class)
public interface StudentExamStatusMapper {
	
	StudentExamStatusDto toStudentExamStatusDto(StudentExamStatus studentExamStatus);
	List<StudentExamStatusDto> toStudentExamStatusDtoList(List<StudentExamStatus> studentExamStatusList);
	
}
