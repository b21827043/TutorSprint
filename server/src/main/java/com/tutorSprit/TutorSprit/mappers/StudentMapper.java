package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.StudentDto;
import com.tutorSprit.TutorSprit.dto.StudentTeacherViewDto;
import com.tutorSprit.TutorSprit.dto.UserDto;
import com.tutorSprit.TutorSprit.entities.Student;
import com.tutorSprit.TutorSprit.requests.AddUserRequest;

@Mapper(componentModel = "spring", uses= {StudentExamStatusMapper.class,ClassroomMapper.class})
public interface StudentMapper {
	
	Student toStudent(AddUserRequest addUserRequest);
	StudentTeacherViewDto toStudentDto(Student student);
	
	UserDto studentToUserDto(Student student);
	List<UserDto> studentListToUserDtoList(List<Student> userList);
	
	List<StudentTeacherViewDto> toStudentDtoList(List<Student> studentList);
	
}
