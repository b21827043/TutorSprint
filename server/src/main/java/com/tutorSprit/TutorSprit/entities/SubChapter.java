package com.tutorSprit.TutorSprit.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "subChapter")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@JsonIgnoreProperties("questions")
public class SubChapter {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long subChapterId;
	
	private String subChapterName;
	
	@Column(length = 5000)
	private String subChapterIntroText;

	@JsonBackReference
	@ManyToOne
	private Chapter chapter;
	
	@JsonManagedReference
	@JsonIgnore
	@OneToMany(mappedBy = "subChapter", targetEntity = Question.class, cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
	private List<Question> questions;



	public SubChapter(String chapterName, String chapterIntroText,Chapter chapter) {
		this.subChapterName = chapterName;
		this.subChapterIntroText = chapterIntroText;
		this.chapter = chapter;
	}



	public SubChapter(String subChapterName, String subChapterIntroText) {
		this.subChapterName = subChapterName;
		this.subChapterIntroText = subChapterIntroText;
	}
	

	
	
}
