package com.example.demo.controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Demandv;
import com.example.demo.model.DriveLink;
import com.example.demo.model.Validation;
import com.example.demo.service.DemandvService;
import com.example.demo.service.DriveLinkService;

@RestController
public class DriveLinkController {


		

		@Autowired
		private DriveLinkService demandvService;
		
		@GetMapping("/DriveLink")
		public List<DriveLink> getAllListe(){
			return demandvService.getAllEtudiants();
		}

		@PostMapping("/DriveLink")
		DriveLink createListe(@RequestBody DriveLink employee) {

			return demandvService.createListe(employee) ;
	}
		@GetMapping("/DriveLink/{id}")
		public ResponseEntity<DriveLink> getListeById(@PathVariable Long id) {
			return demandvService.getEmployeeById(id);
		}
		@DeleteMapping("/DriveLink/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
			return demandvService.deleteEmployee(id);
		}

	
}
