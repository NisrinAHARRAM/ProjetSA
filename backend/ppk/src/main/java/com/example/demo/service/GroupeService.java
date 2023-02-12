package com.example.demo.service;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Demandv;
import com.example.demo.model.Encadrant;
import com.example.demo.model.Groupe;
import com.example.demo.repository.EncadrantRepository;
import com.example.demo.repository.GroupeRepository;
import com.example.demo.repository.ListeRepository;

import net.bytebuddy.utility.RandomString;

@Service
public class GroupeService {
@Autowired
GroupeRepository en;
public List<Groupe> getAllEtudiants(){
	   return en.findAll();
}
public ResponseEntity<Groupe> getEmployeeById( Long id) {
	Groupe employee = en.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
	return ResponseEntity.ok(employee);
}

public Optional<Groupe> serchEtudiants(Long id){
	   return en.findById(id);
}	

public Groupe createListe(Groupe employee) {
	return en.save(employee);
}
public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id){
	Groupe etudiant = en.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
	en.delete(etudiant);
	Map<String, Boolean> response = new HashMap<>();
	response.put("deleted", Boolean.TRUE);
	return ResponseEntity.ok(response);
}


}
