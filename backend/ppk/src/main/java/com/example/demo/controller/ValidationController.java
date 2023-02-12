package com.example.demo.controller;
import com.example.demo.model.Validation;
import com.example.demo.service.ValidationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ValidationController {


	@Autowired
	private ValidationService ValidationService;



	@GetMapping("/Validation")
	public List<Validation> getAllListe(){
		return ValidationService.getAllEmployees();
	}


	@GetMapping("/Validation/{id}")
	public ResponseEntity<Validation> getListeById(@PathVariable Long id) {
		return ValidationService.getEmployeeById(id);
	}

	@PutMapping("/Validation/{id}")
	public ResponseEntity<Validation> updateEmployee(@PathVariable Long id, @RequestBody Validation employeeDetails){
		return ValidationService.updateEmployee( id, employeeDetails);
	}
	@DeleteMapping("/Validation/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		return ValidationService.deleteEmployee(id);
	}

	@PostMapping("/validation")
	Validation createListe(@RequestBody Validation employee) {
			return ValidationService.createListe(employee) ;
	}
	@PostMapping("/valid")
	Validation createList(@RequestBody Validation employee) {
			Validation en=new Validation();
			en.setIdv(employee.getIdv());
			
			return ValidationService.createListe(en) ;
	}
/*	@GetMapping("/val/{appogE}")
	public List<Validation> getEnregistrerByAppogE(@PathVariable Long appogE) {
	    return ValidationService.getEnregistrerByAppogE(appogE);
	}*/

}
