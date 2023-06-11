package com.tutorSprit.TutorSprit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tutorSprit.TutorSprit.entities.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher,Long> {

}
