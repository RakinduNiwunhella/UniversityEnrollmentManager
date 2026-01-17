package org.example.universitymanagementsystem.model;

public class Alumni extends Person {

    private int graduationYear;
    private String degreeTitle;
    private String currentEmployer;

    public Alumni() {}

    public Alumni(String name, String surname) {
        super(name, surname);
    }

    public int getGraduationYear() {
        return graduationYear;
    }

    public String getDegreeTitle() {
        return degreeTitle;
    }

    public String getCurrentEmployer() {
        return currentEmployer;
    }

    public void setGraduationYear(int graduationYear) {
        this.graduationYear = graduationYear;
    }

    public void setDegreeTitle(String degreeTitle) {
        this.degreeTitle = degreeTitle;
    }

    public void setCurrentEmployer(String currentEmployer) {
        this.currentEmployer = currentEmployer;
    }
}