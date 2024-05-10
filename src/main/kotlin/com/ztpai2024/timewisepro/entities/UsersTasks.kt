package com.ztpai2024.timewisepro.entities

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Table

object UsersTasks : Table(){
    val idUser = reference("id_user", Users)
    val idTask = reference("id_task", Tasks)
}