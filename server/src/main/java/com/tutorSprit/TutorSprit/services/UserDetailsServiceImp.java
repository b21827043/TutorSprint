package com.tutorSprit.TutorSprit.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tutorSprit.TutorSprit.entities.User;
import com.tutorSprit.TutorSprit.jwt.JwtUserDetails;
import com.tutorSprit.TutorSprit.repository.UserRepository;

@Service
public class UserDetailsServiceImp implements UserDetailsService {

	private UserRepository userRepository;
	
    public UserDetailsServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByEmail(username);
		return JwtUserDetails.create(user);
	}
	
	public UserDetails loadUserById(Long id) {
		User user = userRepository.findById(id).get();
		return JwtUserDetails.create(user); 
	}
	
}