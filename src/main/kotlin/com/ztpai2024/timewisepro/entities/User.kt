package com.ztpai2024.timewisepro.entities

import com.ztpai2024.timewisepro.entities.User.Companion.referrersOn
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

class User (id: EntityID<Int>) : IntEntity(id), UserDetails {
    companion object : IntEntityClass<User>(Users)
    {
        fun findByEmail(email: String): User? {
        return User.find { Users.email eq email }.singleOrNull()
    }}



    var userEmail by Users.email
    var userPassword by Users.password
    var userType by Users.userType

    var userDetails by UserDetail referencedOn Users.idUserDetails

    var tasks by Task via UsersTasks


    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        return mutableListOf()
    }

    override fun getPassword(): String {
        return userPassword
    }

    override fun getUsername(): String = userEmail

    override fun isAccountNonExpired(): Boolean = true

    override fun isAccountNonLocked(): Boolean =  true

    override fun isCredentialsNonExpired(): Boolean = true

    override fun isEnabled(): Boolean = true
}