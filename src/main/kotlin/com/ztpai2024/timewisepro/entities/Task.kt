package com.ztpai2024.timewisepro.entities

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID

class Task (id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Task>(Tasks)

    var title by Tasks.title
    var description by Tasks.description
    var dueDate by Tasks.dueDate


    var user by User referencedOn Tasks.idAssignedBy
}