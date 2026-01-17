package org.example.universitymanagementsystem.service.impl;

import org.example.universitymanagementsystem.model.Person;
import org.example.universitymanagementsystem.model.Student;
import org.example.universitymanagementsystem.service.EnrollmentManager;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WestminsterEnrollmentManager implements EnrollmentManager {

    private final List<Person> personList = new ArrayList<>();

    @Override
    public List<Person> getAllPeople() {
        return personList;
    }

    @Override
    public List<Student> getAllStudents() {
        return personList.stream()
                .filter(p -> p instanceof Student)
                .map(p -> (Student) p)
                .collect(Collectors.toList());
    }

    @Override
    public void addPerson(Person person) {
        personList.add(person);
    }

    @Override
    public List<Person> searchByIdPrefix(String prefix) {
        return personList.stream()
                .filter(p -> p.getId() != null &&
                        p.getId().toLowerCase().startsWith(prefix.toLowerCase()))
                .collect(Collectors.toList());
    }
}