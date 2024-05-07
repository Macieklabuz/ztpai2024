package com.ztpai2024.timewisepro.entities

import com.ztpai2024.timewisepro.entities.User.Companion.referrersOn
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID

class User (id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<User>(Users)

    var email by Users.email
    var password by Users.password
    var userType by Users.userType

    var userDetails by UserDetail referencedOn Users.idUserDetails

    var tasks by Task via UsersTasks
}