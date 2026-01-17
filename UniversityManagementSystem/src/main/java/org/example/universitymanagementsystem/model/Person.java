package org.example.universitymanagementsystem.model;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Person {

    private String name;
    private String surname;
    private LocalDate dob;
    private String id;

    public Person() {}

    public Person(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public LocalDate getDob() {
        return dob;
    }

    public String getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDobAsString() {
        if (dob == null) return "N/A";
        return dob.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
    }
}