package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import com.tutorSprit.TutorSprit.dto.ChoiceDto;
import com.tutorSprit.TutorSprit.entities.Choice;
import com.tutorSprit.TutorSprit.requests.AddChoiceRequest;
import com.tutorSprit.TutorSprit.requests.UpdateChoiceRequest;

public interface ChoiceMapper {
	
	Choice toChoice(AddChoiceRequest addChoiceRequest);
	ChoiceDto toChoiceDto(Choice choice);
	List<ChoiceDto> toChoiceDtoList(List<Choice> choiceList);
	
	Choice toChoiceUpdate(Choice choice,UpdateChoiceRequest updateChoiceRequest);
}
