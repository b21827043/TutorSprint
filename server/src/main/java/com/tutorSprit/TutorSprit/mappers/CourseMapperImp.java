package com.tutorSprit.TutorSprit.mappers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tutorSprit.TutorSprit.dto.CourseDto;
import com.tutorSprit.TutorSprit.dto.StudentAnalysisCourseDto;
import com.tutorSprit.TutorSprit.entities.Course;
import com.tutorSprit.TutorSprit.requests.CourseRequest;

@Component
public class CourseMapperImp implements CourseMapper {
	
	@Autowired
	ChapterMapper chapterMapper;
	
	
	@Override
	public Course toCourse(CourseRequest courseRequest) {
		return new Course(courseRequest.getCourseName(),courseRequest.getCourseIntroText(),courseRequest.getLevel());
	}

	@Override
	public CourseDto toCourseDto(Course course) {
		return new CourseDto(course.getCourseId(),course.getCourseName(),course.getCourseIntroText(),course.getLevel(),chapterMapper.toChapterDtoList(course.getChapters()));
	}

	@Override
	public List<CourseDto> toCourseDtoList(List<Course> courseList) {
		
		List<CourseDto> courseDtoList = new ArrayList<CourseDto>();
		if (courseList == null ) {
			return courseDtoList;
		}
		for ( int i = 0 ; i < courseList.size() ; i++) {
			
			CourseDto courseDto = toCourseDto(courseList.get(i));
			courseDtoList.add(courseDto);
		}
		return courseDtoList;
	}

	@Override
	public Course toCourseUpdate(Course course, CourseRequest courseRequest) {
		return new Course(course.getCourseId(),courseRequest.getCourseName(),courseRequest.getCourseIntroText(),course.getChapters(),course.getLevel());
	}

	@Override
	public StudentAnalysisCourseDto toStudentAnalysisCourseDto(Course course) {
		return new StudentAnalysisCourseDto(course.getCourseId(),course.getCourseName(),course.getCourseIntroText(),chapterMapper.toStudentAnalysisChapterDtoList(course.getChapters()));
	}

	@Override
	public List<StudentAnalysisCourseDto> toStudentAnalysisCourseDtoList(List<Course> courseList) {
		List<StudentAnalysisCourseDto> studentAnalysisCourseDtoList = new ArrayList<StudentAnalysisCourseDto>();
		if (courseList == null) {
			return studentAnalysisCourseDtoList;
		}
		for (int i = 0 ; i < courseList.size() ; i++) {
			StudentAnalysisCourseDto studentAnalysisCourseDto = toStudentAnalysisCourseDto(courseList.get(i));
			studentAnalysisCourseDtoList.add(studentAnalysisCourseDto);
		}
		return studentAnalysisCourseDtoList;
	}

}
