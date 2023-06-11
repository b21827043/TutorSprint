package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.TeacherDto;
import com.tutorSprit.TutorSprit.entities.Teacher;
import com.tutorSprit.TutorSprit.requests.AddUserRequest;
@Mapper(componentModel = "spring",uses= {ExamMapper.class,ClassroomMapper.class})
public interface TeacherMapper {
	
	Teacher toTeacher(AddUserRequest addUserRequest);
	TeacherDto toTeacherDto(Teacher teacher);
	
	List<TeacherDto> toTeacherDtoList(List<Teacher> teacherList);
	
}
