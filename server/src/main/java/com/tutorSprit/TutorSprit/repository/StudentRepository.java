package com.tutorSprit.TutorSprit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tutorSprit.TutorSprit.entities.Student;

public interface StudentRepository extends JpaRepository<Student,Long> {

}
