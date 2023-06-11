package com.tutorSprit.TutorSprit.responses;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
	
	
	String message;
	Long userId;
	String author;
	String accessToken;
	String refreshToken;
	
	
}
