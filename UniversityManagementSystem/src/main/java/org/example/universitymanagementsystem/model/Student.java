package org.example.universitymanagementsystem.model;

public class Student extends Person {

    private String courseTitle;
    private int modulesEnrolled;

    public Student() {}

    public Student(String name, String surname) {
        super(name, surname);
    }

    public String getCourseTitle() {
        return courseTitle;
    }

    public int getModulesEnrolled() {
        return modulesEnrolled;
    }

    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }

    public void setModulesEnrolled(int modulesEnrolled) {
        this.modulesEnrolled = modulesEnrolled;
    }
}