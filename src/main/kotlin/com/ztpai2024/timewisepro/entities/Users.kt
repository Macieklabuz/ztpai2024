package com.ztpai2024.timewisepro.entities

import org.hibernate.usertype.UserType
import org.jetbrains.exposed.dao.id.IntIdTable

object Users : IntIdTable(){
    val email = varchar("email", 255)
    val password = varchar("password", 255)
    val userType = varchar("user_type", 255)
    val idUserDetails = reference("id_details", UsersDetails)
}