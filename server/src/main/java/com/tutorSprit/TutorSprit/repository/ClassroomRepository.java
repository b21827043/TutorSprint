package com.tutorSprit.TutorSprit.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tutorSprit.TutorSprit.entities.Classroom;

public interface ClassroomRepository extends JpaRepository<Classroom,Long>{

	List<Classroom> findAllByTeacherId(int i);

}
