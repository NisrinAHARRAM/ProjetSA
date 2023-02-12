package com.example.demo.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Demandv;
import com.example.demo.model.DriveLink;
import com.example.demo.model.Validation;
import com.example.demo.repository.DemandvRepository;
import com.example.demo.repository.DriveLinkRepository;
import com.example.demo.repository.ValidationRepository;

@Service
public class DriveLinkService {

		@Autowired
		DriveLinkRepository en;
		public List<DriveLink> getAllEtudiants(){
			   return en.findAll();
	}
		public ResponseEntity<DriveLink> getEmployeeById( Long id) {
			DriveLink employee = en.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			return ResponseEntity.ok(employee);
		}

		public Optional<DriveLink> serchEtudiants(Long id){
			   return en.findById(id);
		}	
		
		public DriveLink createListe(DriveLink employee) {
			return en.save(employee);
	}
		public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id){
			DriveLink etudiant = en.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			en.delete(etudiant);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	}

	

