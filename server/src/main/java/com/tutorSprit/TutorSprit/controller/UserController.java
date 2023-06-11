package com.tutorSprit.TutorSprit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tutorSprit.TutorSprit.dto.StudentAnalysisCourseDto;
import com.tutorSprit.TutorSprit.dto.StudentDto;
import com.tutorSprit.TutorSprit.dto.TeacherDto;
import com.tutorSprit.TutorSprit.dto.UserDto;
import com.tutorSprit.TutorSprit.services.UserService;

@RestController
@CrossOrigin(origins="*")
public class UserController {
	
	
	@Autowired
	UserService userService;
	
	
	@GetMapping("/user")
	public ResponseEntity<List<UserDto>> readAllUser(){
		return new ResponseEntity<>(userService.readAllUser(),HttpStatus.OK);
	}
	
	@GetMapping("/student/{id}")
	public ResponseEntity<StudentDto> readStudentById(@PathVariable long id){
		return new ResponseEntity<>(userService.readStudentDtoById(id),HttpStatus.OK);
	}
	
	@GetMapping("/teacher/{id}")
	public ResponseEntity<TeacherDto> readTeacherById(@PathVariable long id){
		return new ResponseEntity<>(userService.readTeacherDtoById(id),HttpStatus.OK);
	}
	
	@GetMapping("student")
	public ResponseEntity<List<StudentDto>> readAllStudent(){
		return new ResponseEntity<>(userService.readAllStudent(),HttpStatus.OK);
	}
	
	@GetMapping("/student/{id}/analysis")
	public ResponseEntity<List<StudentAnalysisCourseDto>> readStudentAnalysisByStudentId(@PathVariable long id){
		return new ResponseEntity<>(userService.readStudentAnalysisByStudentId(id),HttpStatus.OK);
	}
	
	@GetMapping("teacher")
	public ResponseEntity<List<TeacherDto>> readAllTeacher(){
		return new ResponseEntity<>(userService.readAllTeacher(),HttpStatus.OK);
	}
	
}
