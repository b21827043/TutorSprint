package com.tutorSprit.TutorSprit.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.tutorSprit.TutorSprit.entities.Student;
import com.tutorSprit.TutorSprit.entities.StudentChapterAnalysis;

public interface StudentChapterAnalysisRepository extends JpaRepository<StudentChapterAnalysis,Long> {
	
	
	
}
