package com.tutorSprit.TutorSprit.mappers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.tutorSprit.TutorSprit.dto.ChoiceDto;
import com.tutorSprit.TutorSprit.entities.Choice;
import com.tutorSprit.TutorSprit.requests.AddChoiceRequest;
import com.tutorSprit.TutorSprit.requests.UpdateChoiceRequest;

@Component
public class ChoiceMapperImp implements ChoiceMapper {

	@Override
	public Choice toChoice(AddChoiceRequest addChoiceRequest) {
		return new Choice(addChoiceRequest.getChoiceImg(),addChoiceRequest.getChoiceText(),addChoiceRequest.isCorrectAnswer());
	}

	@Override
	public ChoiceDto toChoiceDto(Choice choice) {
		return new ChoiceDto(choice.getChoiceId(),choice.getChoiceImg(),choice.getChoiceText());
	}

	@Override
	public List<ChoiceDto> toChoiceDtoList(List<Choice> choiceList) {
		List<ChoiceDto> choiceDtoList = new ArrayList<ChoiceDto>();
		if ( choiceList == null) {
			return choiceDtoList;
		}
		for ( int i  = 0 ; i < choiceList.size() ; i++) {
			ChoiceDto choiceDto = toChoiceDto(choiceList.get(i));
			choiceDtoList.add(choiceDto);
		}
		return choiceDtoList;
	}

	@Override
	public Choice toChoiceUpdate(Choice choice, UpdateChoiceRequest updateChoiceRequest) {
		return new Choice(choice.getChoiceId(),updateChoiceRequest.getChoiceImg(),updateChoiceRequest.getChoiceText(),choice.getQuestion(),updateChoiceRequest.isCorrectAnswer());
	}

}
