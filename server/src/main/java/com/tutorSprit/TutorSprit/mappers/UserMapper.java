package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.StudentDto;
import com.tutorSprit.TutorSprit.dto.TeacherDto;
import com.tutorSprit.TutorSprit.dto.UserDto;
import com.tutorSprit.TutorSprit.entities.Student;
import com.tutorSprit.TutorSprit.entities.Teacher;
import com.tutorSprit.TutorSprit.entities.User;
import com.tutorSprit.TutorSprit.requests.AddUserRequest;

@Mapper(componentModel="spring",uses= {ExamMapper.class,ClassroomMapper.class,StudentExamStatusMapper.class})
public interface UserMapper {
	
	Student toStudent(AddUserRequest addUserRequest);
	Teacher toTeacher(AddUserRequest addUserRequest);
	
	UserDto toUserDto(User user);
	
	
	List<UserDto> toUserDtoList(List<User> userList);
	
	StudentDto toStudentDto(Student student);
	List<StudentDto> toStudentDto(List<Student> studentList);
	
}
