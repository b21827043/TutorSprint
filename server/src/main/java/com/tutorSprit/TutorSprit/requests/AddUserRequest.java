package com.tutorSprit.TutorSprit.requests;

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
public class AddUserRequest {
	private String email;
	private String fullName;
	private String password;
}
