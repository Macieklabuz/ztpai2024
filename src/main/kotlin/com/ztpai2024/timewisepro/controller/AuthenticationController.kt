package com.ztpai2024.timewisepro.controller

import com.ztpai2024.timewisepro.dtos.LoginUserDto
import com.ztpai2024.timewisepro.dtos.RegisterUserDto
import com.ztpai2024.timewisepro.entities.User
import com.ztpai2024.timewisepro.repositories.UserDto
import com.ztpai2024.timewisepro.services.AuthenticationService
import com.ztpai2024.timewisepro.services.JwtService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RequestMapping("/auth")
@RestController
class AuthenticationController(
    private val jwtService: JwtService,
    private val authenticationService: AuthenticationService
) {
    @PostMapping("/signup")
    fun register(@RequestBody registerUserDto: RegisterUserDto?): ResponseEntity<UserDto> {
        val registeredUser: UserDto? = authenticationService.signup(registerUserDto!!)

        return ResponseEntity.ok(registeredUser)
    }

    @PostMapping("/login")
    fun authenticate(@RequestBody loginUserDto: LoginUserDto?): ResponseEntity<out Any> {
        val authenticatedUser: User? = authenticationService.authenticate(loginUserDto!!)

        val jwtToken = if (authenticatedUser != null) {
            jwtService.generateToken(authenticatedUser as UserDetails)
        } else {
            return ResponseEntity<String>("Access Denied", HttpStatus.FORBIDDEN)
        }

        val loginResponse = LoginResponse().apply {
            token = jwtToken
            expiresIn = jwtService.expirationTime
        }
        return ResponseEntity.ok<LoginResponse>(loginResponse)
    }



}

class LoginResponse {
    // Getters and setters...
    var token: String? = null

    var expiresIn: Long = 0
}