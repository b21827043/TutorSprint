package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.PostDto;
import com.tutorSprit.TutorSprit.entities.Post;
import com.tutorSprit.TutorSprit.requests.AddPostRequest;
import com.tutorSprit.TutorSprit.requests.UpdatePostRequest;

@Mapper(componentModel = "spring" , uses=MessageMapper.class)
public interface PostMapper {
	
	Post toPost(AddPostRequest addPostRequest);
	PostDto toPostDto(Post post);
	List<PostDto> toPostDtoList(List<Post> postList);
	Post toPostUpdate(Post post,UpdatePostRequest updatePostRequest);
}
