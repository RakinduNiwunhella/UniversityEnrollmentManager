package org.example.universitymanagementsystem.service;

import org.example.universitymanagementsystem.model.Person;
import org.example.universitymanagementsystem.model.Student;

import java.util.List;

public interface EnrollmentManager {

    List<Person> getAllPeople();

    List<Student> getAllStudents();

    void addPerson(Person person);

    List<Person> searchByIdPrefix(String prefix);
}