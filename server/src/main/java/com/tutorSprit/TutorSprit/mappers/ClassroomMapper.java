package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.ClassroomDto;
import com.tutorSprit.TutorSprit.dto.ClassroomStudentViewDto;
import com.tutorSprit.TutorSprit.entities.Classroom;
import com.tutorSprit.TutorSprit.requests.AddClassroomRequest;
import com.tutorSprit.TutorSprit.requests.UpdateClassroomRequest;

@Mapper(componentModel = "spring",uses= {StudentMapper.class ,ExamMapper.class,PostMapper.class})
public interface ClassroomMapper {
	
	Classroom requestToClassroom(AddClassroomRequest addClassroomRequest);
	ClassroomDto toClassroomDto(Classroom classroom);
	ClassroomStudentViewDto toClassroomStudentViewDto(Classroom classroom);
	List<ClassroomDto> toClassroomDtoList(List<Classroom> classroomList);
	List<ClassroomStudentViewDto> toClassroomStudentViewDtoList(List<Classroom> classroomList);
	Classroom toClassroomUpdate(Classroom classroom,UpdateClassroomRequest updateClassroomRequest);
	
}
