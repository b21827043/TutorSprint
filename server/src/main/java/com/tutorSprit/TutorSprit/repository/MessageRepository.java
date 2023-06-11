package com.tutorSprit.TutorSprit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tutorSprit.TutorSprit.entities.Message;

public interface MessageRepository extends JpaRepository<Message,Long>{

}