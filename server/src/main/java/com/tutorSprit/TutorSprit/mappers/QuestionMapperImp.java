package com.tutorSprit.TutorSprit.mappers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tutorSprit.TutorSprit.dto.QuestionDto;
import com.tutorSprit.TutorSprit.entities.Question;
import com.tutorSprit.TutorSprit.requests.AddQuestionRequest;
import com.tutorSprit.TutorSprit.requests.UpdateQuestionRequest;

@Component
public class QuestionMapperImp implements QuestionMapper{
	
	@Autowired
	ChoiceMapper choiceMapper;
	
	
	@Override
	public Question toQuestion(AddQuestionRequest addQuestionRequest) {
		return new Question(addQuestionRequest.getQuestionDif(),addQuestionRequest.getQuestionImg(),addQuestionRequest.getQuestionText());
	}

	@Override
	public QuestionDto toQuestionDto(Question question) {
		return new QuestionDto(question.getQuestionId(),question.getQuestionDif(),question.getQuestionImg(),question.getQuestionText(),choiceMapper.toChoiceDtoList(question.getChoices()));
	}

	@Override
	public List<QuestionDto> toQuestionDtoList(List<Question> questionList) {
		List<QuestionDto> questionDtoList = new ArrayList<>();
		if (questionList == null) {
			return questionDtoList;
		}
		for (int i = 0 ; i < questionList.size() ; i++) {
			QuestionDto questionDto = toQuestionDto(questionList.get(i));
			questionDtoList.add(questionDto);
		}
		return questionDtoList;
	}

	@Override
	public Question toQuestionUpdate(Question question, UpdateQuestionRequest updateQuestionRequest) {
		return new Question(question.getQuestionId(),updateQuestionRequest.getQuestionDif(),updateQuestionRequest.getQuestionImg(),updateQuestionRequest.getQuestionText(),question.getSubChapter(),question.getChoices(),question.getExams());
	}

}
