package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_people")
@NoArgsConstructor
@Getter
@Setter
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    @Setter(AccessLevel.NONE)
    private Long id;

    @Column(name = "first name", nullable = false)
    private String firstname;

    @Column(name = "last name", nullable = false)
    private String lastname;

    @Column(name = "cpf", nullable = false, unique = true)
    private String cpf;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "telephone", nullable = false)
    private Long telephone;

    @Builder
    public Person(String firstname,String lastname, String cpf, Integer age, Long telephone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.cpf = cpf;
        this.age = age;
        this.telephone = telephone;
    }

}