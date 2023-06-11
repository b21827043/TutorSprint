package com.tutorSprit.TutorSprit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tutorSprit.TutorSprit.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String username);
	
}
