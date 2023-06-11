package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.MessageDto;
import com.tutorSprit.TutorSprit.entities.Message;
import com.tutorSprit.TutorSprit.requests.AddMessageRequest;
import com.tutorSprit.TutorSprit.requests.UpdateMessageRequest;

@Mapper(componentModel = "spring")
public interface MessageMapper {
	
	Message toMessage(AddMessageRequest addMessageRequest);
	MessageDto toMessageDto(Message message);
	List<MessageDto> toMessageDtoList(List<Message> messageList);

	Message toMessageUpdate(Message message,UpdateMessageRequest updateMessageRequest);

	
}
