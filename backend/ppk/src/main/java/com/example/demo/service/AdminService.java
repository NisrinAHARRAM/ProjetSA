package com.example.demo.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository en;
	@Autowired
	



	public List<Admin> getAllEtudiants(){
					   return en.findAll();
		}

	public List<Admin> getAllEmployees(){
		return en.findAll();
	}

	public Optional<Admin> serchEtudiants(Long id){
		   return en.findById(id);
	}	   
	 public void addEtudiant(Admin p) {
	   
	     	 en.save(p);
	 }
	 public void deleteEtudiant(Long id) {
			en.deleteById(id);
		}

	public Admin updateEtudiant(Admin p) {
					
					  return (Admin) en.save(p);
		}
					
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id){
		Admin etudiant = en.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		en.delete(etudiant);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}



	public ResponseEntity<Admin> getEmployeeById( Long id) {
		Admin employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	public Admin getEtudiantById(Long id) {
	    return en.findById(id).orElse(null);
	}

	public Admin findById(Long id) {
	    return en.findById(id).orElse(null);
	}
	public Admin createListe(Admin employee) {
		return en.save(employee);
}
	/* public List<Validation> getEnregistrerByAppogE(Long appogE) {
	    return en.findByAppogE(appogE);
	}*/
	public ResponseEntity<Admin> updateEmployee( Long id, Admin employeeDetails){
		Admin employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		employee.setIdun(employeeDetails.getIdun());
		employee.setNomUn(employeeDetails.getNomUn());;
		employee.setEncadrentUn(employeeDetails.getEncadrentUn());
		employee.setEtudiantUn(employeeDetails.getEtudiantUn());
		Admin updatedEmployee = en.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
}
