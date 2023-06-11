package com.tutorSprit.TutorSprit.responses;


import com.tutorSprit.TutorSprit.dto.ExamDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ExamStartResponse {
	
	private long examDuration;
	
	private ExamDto examDto;
	
}
