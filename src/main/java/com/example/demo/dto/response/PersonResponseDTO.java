package com.example.demo.dto.response;

import com.example.demo.entity.Person;
import lombok.Getter;

@Getter
public class PersonResponseDTO {

    private Long id;

    private String firstName;

    private String lastName;

    private String cpf;

    private Integer age;

    private Long telephone;

    public PersonResponseDTO(Person person) {
        this.id = person.getId();
        this.firstName = person.getFirstname();
        this.lastName = person.getLastname();
        this.cpf = person.getCpf();
        this.age = person.getAge();
        this.telephone = person.getTelephone();
    }
}
