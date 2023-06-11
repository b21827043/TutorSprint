package com.tutorSprit.TutorSprit.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.tutorSprit.TutorSprit.dto.MessageDto;
import com.tutorSprit.TutorSprit.dto.PostDto;
import com.tutorSprit.TutorSprit.entities.Classroom;
import com.tutorSprit.TutorSprit.entities.Message;
import com.tutorSprit.TutorSprit.entities.Post;
import com.tutorSprit.TutorSprit.mappers.MessageMapper;
import com.tutorSprit.TutorSprit.mappers.PostMapper;
import com.tutorSprit.TutorSprit.repository.ClassroomRepository;
import com.tutorSprit.TutorSprit.repository.MessageRepository;
import com.tutorSprit.TutorSprit.repository.PostRepository;
import com.tutorSprit.TutorSprit.requests.AddMessageRequest;
import com.tutorSprit.TutorSprit.requests.AddPostRequest;
import com.tutorSprit.TutorSprit.requests.UpdateMessageRequest;
import com.tutorSprit.TutorSprit.requests.UpdatePostRequest;

@Service
public class ForumService {
	
	@Autowired
	PostRepository postRepository;
	
	@Autowired
	PostMapper postMapper;
	
	@Autowired
	MessageRepository messageRepository;
	
	@Autowired
	MessageMapper messageMapper;
	
	@Autowired 
	ClassroomRepository classroomRepository;
	
	
	//---------------   POST   ---------------//

	public PostDto addPost(AddPostRequest addPostRequest) {
		Post post = postMapper.toPost(addPostRequest);
		Optional<Classroom> classroom = classroomRepository.findById(addPostRequest.getClassroomId());
		if ( classroom.isPresent() ) {
			post.setClassroom(classroom.get());
		}
		return postMapper.toPostDto(postRepository.save(post));
	}


	public List<PostDto> readAllPost() {
		List<Post> postList = postRepository.findAll();
		return postMapper.toPostDtoList(postList);
	}


	public PostDto readPostByPostId(long id) {
		Optional<Post> post = postRepository.findById(id);
		if (post.isPresent()) {
			return postMapper.toPostDto(post.get());
		}
		return null;
	}

	

	public PostDto updatePost(long id, UpdatePostRequest updatePostRequest) {
		Optional<Post> oldPost = postRepository.findById(id);
		if (oldPost.isPresent()) {
			Post post = postMapper.toPostUpdate(oldPost.get(),updatePostRequest);
			post.setMessages(oldPost.get().getMessages());
			Post updatedPost = postRepository.save(post);
			return postMapper.toPostDto(updatedPost);
		}
		return null;
	}


	public void deletePost(long id) {
		postRepository.deleteById(id);
	}
	
	
	//---------------   Message   ---------------//

	public MessageDto addMessage(AddMessageRequest addMessageRequest) {
		Message message = messageMapper.toMessage(addMessageRequest);
		if (postRepository.findById(addMessageRequest.getPostId()).isPresent()) {
			message.setPost(postRepository.findById(addMessageRequest.getPostId()).get());
		}
		message = messageRepository.save(message);
		return messageMapper.toMessageDto(message);
	}

	public List<MessageDto> readAllMessage() {
		List<Message> messageList = messageRepository.findAll();
		return messageMapper.toMessageDtoList(messageList);
	}


	public MessageDto readMessageByMessageId(long id) {
		Optional<Message> message = messageRepository.findById(id);
		if (message.isPresent()) {
			return messageMapper.toMessageDto(message.get());
		}
		return null;
	}


	public MessageDto updateMessage(long id,UpdateMessageRequest updateMessageRequest) {
		Optional<Message> oldMessage = messageRepository.findById(id);
		if (oldMessage.isPresent()) {
			Message message = messageMapper.toMessageUpdate(oldMessage.get(),updateMessageRequest);
			message.setPost(oldMessage.get().getPost());
			Message updatedMessage = messageRepository.save(message);
			return messageMapper.toMessageDto(updatedMessage);
		}
		return null;
	}


	public void deleteMessage(long id) {
		messageRepository.deleteById(id);
	}
	

}
