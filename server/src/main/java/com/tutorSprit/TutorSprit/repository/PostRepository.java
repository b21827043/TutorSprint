package com.tutorSprit.TutorSprit.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.tutorSprit.TutorSprit.entities.Post;

public interface PostRepository extends JpaRepository<Post,Long>{

	
}
