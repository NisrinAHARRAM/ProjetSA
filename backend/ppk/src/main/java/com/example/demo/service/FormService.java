package com.example.demo.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Form;
import com.example.demo.model.Validation;
import com.example.demo.repository.EtudiantRepository;
import com.example.demo.repository.FormRepository;
import com.example.demo.repository.ValidationRepository;

@Service
public class FormService {

	@Autowired
	FormRepository en;
	@Autowired
	private JavaMailSender mailSender;
	@Autowired
	private EtudiantRepository etudiantRepository;




	public List<Form> getAllEtudiants(){
					   return en.findAll();
		}
///////////
	public List<Form> getAllEmployees(){
		return en.findAll();
	}
/////////////

	///////////////				
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id){
		Form etudiant = en.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		en.delete(etudiant);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
//////////////
	public ResponseEntity<Form> updateEmployee( Long id, Form employeeDetails){
		Form employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		employee.setIdF(employeeDetails.getIdF());
		employee.setAppogeT1(employeeDetails.getAppogeT1());
		employee.setNomET1(employeeDetails.getNomET1());;
		
		employee.setAppogeT2(employeeDetails.getAppogeT2());
		employee.setNomET2(employeeDetails.getNomET2());;
		
		employee.setAppogeT3(employeeDetails.getAppogeT3());
		employee.setNomET3(employeeDetails.getNomET3());

		Form updatedEmployee = en.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
	///////////

	public ResponseEntity<Form> getEmployeeById( Long id) {
		Form employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	///////////////
	public Form getEtudiantById(Long id) {
	    return en.findById(id).orElse(null);
	}

	public Form findById(Long id) {
	    return en.findById(id).orElse(null);
	}
	////////
	public Form createListe(Form employee) {
		return en.save(employee);
		////////////
}


}
