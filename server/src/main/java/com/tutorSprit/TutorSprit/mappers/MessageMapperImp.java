package com.tutorSprit.TutorSprit.mappers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.tutorSprit.TutorSprit.dto.MessageDto;
import com.tutorSprit.TutorSprit.entities.Message;
import com.tutorSprit.TutorSprit.requests.AddMessageRequest;
import com.tutorSprit.TutorSprit.requests.UpdateMessageRequest;

@Component
public class MessageMapperImp implements MessageMapper{

	@Override
	public Message toMessage(AddMessageRequest addMessageRequest) {
		LocalDateTime now = LocalDateTime.now();
		return new Message(addMessageRequest.getSenderId(),addMessageRequest.getMessageText(),now);
	}

	@Override
	public MessageDto toMessageDto(Message message) {
		return new MessageDto(message.getMessageId(),message.getSenderId(),message.getMessageText(),message.getMessageDate());
	}

	@Override
	public List<MessageDto> toMessageDtoList(List<Message> messageList) {
		if (messageList == null) {
			return new ArrayList<MessageDto>();
		}
		List<MessageDto> messageDtoList = new ArrayList<MessageDto>();
		for (int i = 0 ; i < messageList.size() ; i++) {
			MessageDto messageDto = toMessageDto(messageList.get(i));
			messageDtoList.add(messageDto);
		}
		return messageDtoList;
	}


	
	@Override
	public Message toMessageUpdate(Message message,UpdateMessageRequest updateMessageRequest) {
		return new Message(message.getMessageId(),message.getSenderId(),updateMessageRequest.getMessageText(),message.getMessageDate());
	}

}
