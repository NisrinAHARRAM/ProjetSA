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
import com.example.demo.model.Demandv;
import com.example.demo.model.Form;
import com.example.demo.model.Liste;
import com.example.demo.model.Note;
import com.example.demo.model.Rendezvous;
import com.example.demo.model.Validation;
import com.example.demo.repository.DemandvRepository;
import com.example.demo.repository.EtudiantRepository;
import com.example.demo.repository.FormRepository;
import com.example.demo.repository.NoteRepository;
import com.example.demo.repository.ValidationRepository;

@Service
public class NoteService {

	@Autowired
	NoteRepository en;
	@Autowired
	private JavaMailSender mailSender;
	@Autowired
	private EtudiantRepository etudiantRepository;




	public List<Note> getAllEtudiants(){
					   return en.findAll();
		}
///////////
	public List<Note> getAllEmployees(){
		return en.findAll();
	}
/////////////

	///////////////				
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id){
		Note etudiant = en.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		en.delete(etudiant);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
//////////////
	public ResponseEntity<Note> updateEmployee( Long id, Note employeeDetails){
		Note employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		employee.setIdn(employeeDetails.getIdn());
		employee.setNote(employeeDetails.getNote());
		
		Note updatedEmployee = en.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
	///////////

	public ResponseEntity<Note> getEmployeeById( Long id) {
		Note employee = en.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	///////////////
	public Note getEtudiantById(Long id) {
	    return en.findById(id).orElse(null);
	}

	public Note findById(Long id) {
	    return en.findById(id).orElse(null);
	}
	////////

	public Note createListe(Note employee) {
		return en.save(employee);
}

}
