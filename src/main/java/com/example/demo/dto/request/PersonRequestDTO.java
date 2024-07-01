package com.example.demo.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonRequestDTO {

    @NotBlank(message = "O nome não pode estar em branco")
    private String firstName;

    @NotBlank(message = "O sobrenome não pode estar em branco")
    private String lastName;

    @NotBlank(message = "O CPF não pode estar em branco")
    @Pattern(regexp = "[0-9]{11}", message = "CPF deve conter exatamente 11 dígitos numéricos")
    private String cpf;

    @NotNull(message = "A idade não pode ser nula")
    @PositiveOrZero(message = "A idade deve ser zero ou um número positivo")
    private Integer age;

    @NotNull (message = "Telephone number must not be null")
    private Long telephone;
}
