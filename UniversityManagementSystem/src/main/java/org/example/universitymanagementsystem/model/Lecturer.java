package org.example.universitymanagementsystem.model;

public class Lecturer extends Person {

    private int officeNumber;
    private String specialisation;

    public Lecturer() {}

    public Lecturer(String name, String surname) {
        super(name, surname);
    }

    public int getOfficeNumber() {
        return officeNumber;
    }

    public String getSpecialisation() {
        return specialisation;
    }

    public void setOfficeNumber(int officeNumber) {
        this.officeNumber = officeNumber;
    }

    public void setSpecialisation(String specialisation) {
        this.specialisation = specialisation;
    }
}