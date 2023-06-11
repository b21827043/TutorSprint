package com.tutorSprit.TutorSprit.mappers;

import java.util.List;

import org.mapstruct.Mapper;

import com.tutorSprit.TutorSprit.dto.CourseDto;
import com.tutorSprit.TutorSprit.dto.StudentAnalysisCourseDto;
import com.tutorSprit.TutorSprit.entities.Course;
import com.tutorSprit.TutorSprit.requests.CourseRequest;

@Mapper(componentModel = "spring",uses=ChapterMapper.class)
public interface CourseMapper {
	
	Course toCourse(CourseRequest courseRequest);
	CourseDto toCourseDto(Course course);
	List<CourseDto> toCourseDtoList(List<Course> courseList);
	
	Course toCourseUpdate(Course course,CourseRequest courseRequest);
	
	StudentAnalysisCourseDto toStudentAnalysisCourseDto(Course course);
	List<StudentAnalysisCourseDto> toStudentAnalysisCourseDtoList(List<Course> courseList);
	
}
