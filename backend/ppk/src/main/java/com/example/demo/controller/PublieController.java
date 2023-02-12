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
import com.example.demo.model.Liste;
import com.example.demo.model.Publie;
import com.example.demo.model.Validation;
import com.example.demo.service.DemandvService;
import com.example.demo.service.PublieService;

@RestController
public class PublieController {
	

	@Autowired
	private PublieService demandvService;
	
	@GetMapping("/Publie")
	public List<Publie> getAllListe(){
		return demandvService.getAllEtudiants();
	}

	@PostMapping("/Publie")
	Publie createListe(@RequestBody Publie employee) {

		return demandvService.createListe(employee) ;
}
	@GetMapping("/Publie/{id}")
	public ResponseEntity<Publie> getListeById(@PathVariable Long id) {
		return demandvService.getEmployeeById(id);
	}
	@DeleteMapping("/Publie/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		return demandvService.deleteEmployee(id);
	}

}
