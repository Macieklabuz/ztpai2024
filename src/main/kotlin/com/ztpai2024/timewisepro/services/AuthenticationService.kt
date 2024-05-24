package com.ztpai2024.timewisepro.services

import com.ztpai2024.timewisepro.entities.User
import com.ztpai2024.timewisepro.dtos.LoginUserDto
import com.ztpai2024.timewisepro.dtos.RegisterUserDto
import com.ztpai2024.timewisepro.repositories.UserDto
import com.ztpai2024.timewisepro.repositories.UserRepository
import com.ztpai2024.timewisepro.repositories.toDto
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.AuthenticationException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthenticationService(
    private val userRepository: UserRepository,
    private val authenticationManager: AuthenticationManager,
    private val passwordEncoder: PasswordEncoder
) {
    fun signup(input: RegisterUserDto): UserDto? {
        val hashedPassword = passwordEncoder.encode(input.password)
        return transaction {
            val userDetails = com.ztpai2024.timewisepro.entities.UserDetail.new {
                name = input.name
                surname = input.surname
            }
            User.new {
                userEmail = input.email
                userPassword = hashedPassword
                userType = input.userType
                this.userDetails = userDetails
            }.toDto()
        }
    }

    fun authenticate(input: LoginUserDto): User? {
        try {
            authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(
                    input.email,
                    input.password
                )
            )
        } catch (e: AuthenticationException) {
            // Obsługa ogólnego wyjątku uwierzytelniania
            println("Wystąpił błąd podczas uwierzytelniania: ${e.message}")
            return null
        }
        return userRepository.findByEmail(input.email)

    }
}