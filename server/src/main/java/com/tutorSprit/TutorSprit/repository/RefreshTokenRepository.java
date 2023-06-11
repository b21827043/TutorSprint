package com.tutorSprit.TutorSprit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tutorSprit.TutorSprit.entities.RefreshToken;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken,Long> {
	
	RefreshToken findByUserId(Long userId);
	
}
