package com.example.demo.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Demandv;
import com.example.demo.model.Jery;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Demandv;
import com.example.demo.model.Liste;
import com.example.demo.model.Validation;
import com.example.demo.repository.DemandvRepository;
import com.example.demo.repository.JeryRepository;
import com.example.demo.repository.ValidationRepository;

@Service
public class JeryService {
	@Autowired
	JeryRepository en;
	
	public List<Jery> getAllEtudiants(){
		   return en.findAll();
}
	public ResponseEntity<Jery> getEmployeeById( Long id) {
		Jery employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}

	public Optional<Jery> serchEtudiants(Long id){
		   return en.findById(id);
	}	
	
	public Jery createListe(Jery employee) {
		return en.save(employee);
}
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id){
		Jery etudiant = en.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		en.delete(etudiant);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
