package com.example.demo.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class PersonRequestDTO {

    @NotBlank(message = "O nome não pode estar em branco")
    private String name;

    @NotBlank(message = "O CPF não pode estar em branco")
    @Size(min = 11, max = 11, message = "O CPF deve ter 11 caracteres")
    private String cpf;

    @NotNull(message = "A idade não pode ser nula")
    @PositiveOrZero(message = "A idade deve ser zero ou um número positivo")
    private Integer age;

}
