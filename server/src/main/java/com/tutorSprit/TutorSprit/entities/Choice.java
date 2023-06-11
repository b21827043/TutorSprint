package com.tutorSprit.TutorSprit.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "choice")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Choice {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long choiceId;
	
	private String choiceImg;
	
	
	
	@Column(length = 5000)
	private String choiceText;
	
	@JsonBackReference
	@ManyToOne
	private Question question;
	


	public Choice(String choiceImg, String choiceText,long questionId,Question question) {
		this.choiceImg = choiceImg;
		this.choiceText = choiceText;
		this.question = question;
	}



	public Choice(String choiceImg, String choiceText,boolean correctAnswer) {
		this.choiceImg = choiceImg;
		this.choiceText = choiceText;
		this.correctAnswer = correctAnswer;
	}
	
	private boolean correctAnswer;
	
	
}
