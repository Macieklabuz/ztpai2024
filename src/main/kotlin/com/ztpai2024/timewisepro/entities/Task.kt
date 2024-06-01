package com.ztpai2024.timewisepro.entities

import com.ztpai2024.timewisepro.entities.TasksImages.taskId
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.transactions.transaction

class Task (id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Task>(Tasks)

    var title by Tasks.title
    var description by Tasks.description
    var dueDate by Tasks.dueDate


    var user by User referencedOn Tasks.idAssignedBy

    var image: String by Tasks.image
}

