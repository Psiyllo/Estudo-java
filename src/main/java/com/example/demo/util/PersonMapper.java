package com.example.demo.util;

import com.example.demo.dto.request.PersonRequestDTO;
import com.example.demo.dto.response.PersonResponseDTO;
import com.example.demo.entity.Person;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PersonMapper {

    public Person toPerson(PersonRequestDTO personDTO) {
        return Person.builder()
                .firstname(personDTO.getFirstName())
                .lastname(personDTO.getLastName())
                .cpf(personDTO.getCpf())
                .age(personDTO.getAge())
                .telephone(personDTO.getTelephone())
                .build();
    }

    public PersonResponseDTO toPersonDTO(Person person) {
        return new PersonResponseDTO(person);
    }

    public List<PersonResponseDTO> toPeopleDTO(List<Person> peopleList) {
        return peopleList.stream().map(PersonResponseDTO::new).collect(Collectors.toList());
    }

    public void updatePersonData(Person person, PersonRequestDTO personDTO) {
        person.setFirstname(personDTO.getFirstName());
        person.setLastname(personDTO.getLastName());
        person.setCpf(personDTO.getCpf());
        person.setAge(personDTO.getAge());
        person.setTelephone(personDTO.getTelephone());
    }

}
