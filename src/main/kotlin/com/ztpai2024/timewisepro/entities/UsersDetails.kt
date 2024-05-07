package com.ztpai2024.timewisepro.entities

import org.jetbrains.exposed.dao.id.IntIdTable

object UsersDetails : IntIdTable() {
    val name = varchar("name", 255)
    val surname = varchar("surname", 255)
}