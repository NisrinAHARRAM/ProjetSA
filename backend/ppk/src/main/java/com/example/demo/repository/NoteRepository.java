package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Jery;
import com.example.demo.model.Note;

public interface NoteRepository extends JpaRepository<Note, Long>{

}
