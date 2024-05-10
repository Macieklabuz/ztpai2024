package com.ztpai2024.timewisepro.entities

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID

class UserDetail (id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<UserDetail>(UsersDetails)

    var name by UsersDetails.name
    var surname by UsersDetails.surname

}