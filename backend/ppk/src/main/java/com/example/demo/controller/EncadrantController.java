package com.example.demo.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Encadrant;
import com.example.demo.repository.EncadrantRepository;
import com.example.demo.service.EncadrantService;
import com.example.demo.service.ListeService;
import com.example.demo.site.Utility;

@RestController
//@RequestMapping("/Encadrant")
public class EncadrantController {



@Autowired
EncadrantService en;
@Autowired
EncadrantRepository at;
@Autowired
ListeService ls;
/*
@GetMapping("/encadrants")
public List<Encadrant> getAllEmployees(){
	return en.getAllEmployees();
}
*/
@GetMapping("/encadrants")	
public List<Encadrant> getAllEncadrants(){
	  return en.getAllEncadrants();
}
@PostMapping("/encadrant")
public void addEncadrant(@RequestBody Encadrant p) {
	  String emailRegex = ".+@uae\\.ac\\.ma$";
	  if(p.getEmail().matches(emailRegex)){
		 en.addEncadrant(p);
		 }
}
	

@GetMapping("/encadrants/{id}")
public ResponseEntity<Encadrant> getEncadrantById(@PathVariable Long id) {
	return en.getEncadrantById(id);
}


/*
@DeleteMapping("/delte")
public void deleteEncadrant(@RequestBody Long id) {
	en.deleteEncadrant(id);
}*/

@PutMapping("/encadrants/{id}")
public ResponseEntity<Encadrant> updateEncadrant(@PathVariable Long id, @RequestBody Encadrant employeeDetails){
	return en.updateEncadrant( id, employeeDetails);
}
@DeleteMapping("/encadrants/{id}")
public ResponseEntity<Map<String, Boolean>> deleteEncadrant(@PathVariable Long id){
	return en.deleteEncadrant(id);
}
/*
@PutMapping("/update/{id}")
public ResponseEntity<?> updateTodo(@PathVariable Long id, @RequestBody Encadrant todo ){
	
	
		return en.updateTodo(id,todo);
	
}


@GetMapping("/findbyid/{id}")
public ResponseEntity<?> findById(@PathVariable Long id){
	
	
		return en.findById(id);

}*/
/*
@PutMapping("update/{id}")
public ResponseEntity<?> updateTodo(@PathVariable Long id, @RequestBody Encadrant todo ){
	
	if(this.at.findById(id).isPresent()) {
		
		todo.setAppoge(id);
		return new ResponseEntity<>(this.at.save(todo),HttpStatus.OK);
	}
	else {
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}


@GetMapping("/findbyid/{id}")
public ResponseEntity<?> findById(@PathVariable Long id){
	
	if(this.at.findById(id).isPresent()) {
		
		return new ResponseEntity<>(this.at.findById(id),HttpStatus.OK);
	}else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}}*/
//create Encadrant rest api
@PostMapping("/encadrants")
public String createEncadrant(@RequestBody Encadrant employee ,Model model,HttpServletRequest request) 
		throws UnsupportedEncodingException, MessagingException {
//String emailRegex = ".+@etu\\.uae\\.ac\\.ma$";
//if(employee.getEmaiE().matches(emailRegex)){
	en.register(employee);
	String site=Utility.getSiteURL(request);
	en.sendVerificationEmail(employee , site);
	model.addAttribute("page title","registration succeeded");

	return "register/register_succces";
}
@GetMapping("/verify_en")
public String verifyUser(@Param("code") String code) {
  if (en.verify(code)) {
      return "<div class='container text-center'>"+
     " <h3>Congratulations, your account has been verified.</h3>"+
      "<a href='http://localhost:4200/encadrant'>login for home</a>"+
  "</div>";
  } else {
      return "<h1> Sorry, we could not verify account. It maybe already verified,"
      		+ "        or verification code is incorrect "
      		+ "<a href='http://localhost:4200/add'>reteurn pour repter inscription</a>";
  }
}
/*
@GetMapping("/id/{email}")
public Long getAppogeByEmaiE(@PathVariable String email) {
    return en.getAppogeByEmaiE(email);
}

*/

}
