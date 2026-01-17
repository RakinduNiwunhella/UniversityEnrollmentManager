package com.university.ums.entity;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Lecturer extends BaseUser {

    private String staffId;
    private String department;
    private String designation;
}