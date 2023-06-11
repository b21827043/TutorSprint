package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.QuestionDto;
import com.tutorSprit.TutorSprit.entities.Question;
import com.tutorSprit.TutorSprit.requests.AddQuestionRequest;
import com.tutorSprit.TutorSprit.requests.UpdateQuestionRequest;

@Mapper(componentModel = "spring",uses=ChoiceMapper.class)
public interface QuestionMapper {
	
	Question toQuestion(AddQuestionRequest addQuestionRequest);
	QuestionDto toQuestionDto(Question question);
	List<QuestionDto> toQuestionDtoList(List<Question> questionList);
	
	Question toQuestionUpdate(Question question,UpdateQuestionRequest updateQuestionRequest);
}
