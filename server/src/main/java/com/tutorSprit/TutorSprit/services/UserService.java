package com.tutorSprit.TutorSprit.services;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tutorSprit.TutorSprit.dto.AnalysisDto;
import com.tutorSprit.TutorSprit.dto.StudentAnalysisCourseDto;
import com.tutorSprit.TutorSprit.dto.StudentAnalysisSubChapterDto;
import com.tutorSprit.TutorSprit.dto.StudentDto;
import com.tutorSprit.TutorSprit.dto.StudentTeacherViewDto;
import com.tutorSprit.TutorSprit.dto.TeacherDto;
import com.tutorSprit.TutorSprit.dto.UserDto;
import com.tutorSprit.TutorSprit.entities.Student;
import com.tutorSprit.TutorSprit.entities.StudentChapterAnalysis;
import com.tutorSprit.TutorSprit.entities.Teacher;
import com.tutorSprit.TutorSprit.entities.User;
import com.tutorSprit.TutorSprit.mappers.CourseMapper;
import com.tutorSprit.TutorSprit.mappers.StudentMapper;
import com.tutorSprit.TutorSprit.mappers.TeacherMapper;
import com.tutorSprit.TutorSprit.mappers.UserMapper;
import com.tutorSprit.TutorSprit.repository.CourseRepository;
import com.tutorSprit.TutorSprit.repository.StudentChapterAnalysisRepository;
import com.tutorSprit.TutorSprit.repository.StudentRepository;
import com.tutorSprit.TutorSprit.repository.TeacherRepository;
import com.tutorSprit.TutorSprit.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	StudentRepository studentRepository;
	@Autowired
	TeacherRepository teacherRepository;
	@Autowired
	CourseRepository courseRepository;
	@Autowired
	StudentChapterAnalysisRepository studentChapterAnalysisRepository;
	
	@Autowired
	UserMapper userMapper;

	@Autowired
	StudentMapper studentMapper;
	@Autowired
	TeacherMapper teacherMapper;
	@Autowired
	CourseMapper courseMapper;
	
	public List<UserDto> readAllUser() {
		List<User> userList = userRepository.findAll();
		return userMapper.toUserDtoList(userList);
	}
	
	public List<StudentDto> readAllStudent() {
		List<Student> studentList = studentRepository.findAll();
		return userMapper.toStudentDto(studentList);
	}
	
	
	public List<TeacherDto> readAllTeacher() {
		List<Teacher> teacherList = teacherRepository.findAll();
		return teacherMapper.toTeacherDtoList(teacherList);
	}
	
	
	public User getOneUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
	public Optional<User> getOneUserById(long id) {
		return userRepository.findById(id);
		
	}

	public User saveOneUser(User user) {
		return userRepository.save(user);
		
	}
	
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}
	
	public Teacher saveTeacher(Teacher teacher) {
		return teacherRepository.save(teacher);
	}

	public Optional<Student> readStudentById(long id) {
		return studentRepository.findById(id);
	}
	
	public StudentDto readStudentDtoById(long id) {
		Optional<Student> student = studentRepository.findById(id);
		if (student.isPresent()) {
			StudentDto studentDto = userMapper.toStudentDto(student.get());
			return studentDto;
		}
		return null;
	}
	
	public TeacherDto readTeacherDtoById(long id) {
		Optional<Teacher> teacher = teacherRepository.findById(id);
		if (teacher.isPresent()) {
			TeacherDto teacherDto = teacherMapper.toTeacherDto(teacher.get());
			return teacherDto;
		}
		return null;
	}
	
	
	public List<StudentAnalysisCourseDto> readStudentAnalysisByStudentId(long id) {
		Optional<Student> student = studentRepository.findById(id);
		if (student.isPresent()) {
			List<StudentChapterAnalysis> studentChapterAnalysisList = student.get().getStudentChapterAnalysisList();
			List<StudentAnalysisCourseDto> studentAnalysisCourseDto = courseMapper.toStudentAnalysisCourseDtoList(courseRepository.findAll());
			
			for (int i = 0 ; i < studentAnalysisCourseDto.size() ; i++) {
				for (int j = 0 ; j < studentAnalysisCourseDto.get(i).getChapters().size() ; j++) {
					for (int k = 0 ; k < studentAnalysisCourseDto.get(i).getChapters().get(j).getSubChapters().size() ; k++) {
						StudentAnalysisSubChapterDto studentAnalysisSubChapterDto = studentAnalysisCourseDto.get(i).getChapters().get(j).getSubChapters().get(k);
						
						for (int l = 0 ; l < studentChapterAnalysisList.size() ; l++) {
							if (studentChapterAnalysisList.get(l).getSubChapterId() == studentAnalysisSubChapterDto.getSubChapterId()) {
								AnalysisDto analysisDto = new AnalysisDto(studentChapterAnalysisList.get(l).getTrueNumber(),studentChapterAnalysisList.get(l).getFalseNumber(),studentChapterAnalysisList.get(l).getTotalNumber(),studentChapterAnalysisList.get(l).getTrueRate());
								studentAnalysisCourseDto.get(i).getChapters().get(j).getSubChapters().get(k).setAnalysisDto(analysisDto);
							}
						}
						
					}
				}
			}
			return studentAnalysisCourseDto;
		}
		return null;
	}






	

}
