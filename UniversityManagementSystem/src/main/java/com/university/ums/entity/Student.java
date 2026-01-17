package com.university.ums.entity;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Student extends BaseUser {

    private String studentId;
    private String degreeProgram;
    private int year;
}