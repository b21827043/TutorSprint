package com.tutorSprit.TutorSprit.mappers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.tutorSprit.TutorSprit.dto.StudentAnswersDto;
import com.tutorSprit.TutorSprit.entities.StudentAnswers;

@Component
public class StudentAnswersMapperImp implements StudentAnswersMapper{

	@Override
	public StudentAnswersDto toStudentAnswersDto(StudentAnswers studentAnswers) {
		return new StudentAnswersDto(studentAnswers.getStudentAnswersId(),studentAnswers.getQuestionId(),studentAnswers.getChoiceId(),studentAnswers.getTrueChoiceId(),studentAnswers.isTrueChoice());
	}

	@Override
	public List<StudentAnswersDto> toStudentAnswersDtoList(List<StudentAnswers> studentAnswersList) {
		List<StudentAnswersDto> studentAnswerDtoList = new ArrayList<StudentAnswersDto>();
		if ( studentAnswersList == null) {
			return studentAnswerDtoList;
		}
		for (int i = 0 ; i < studentAnswersList.size() ; i++) {
			StudentAnswersDto studentAnswersDto = toStudentAnswersDto(studentAnswersList.get(i));
			studentAnswerDtoList.add(studentAnswersDto);
		}
		return studentAnswerDtoList;
	}

}
