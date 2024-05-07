package com.ztpai2024.timewisepro.entities

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID

class TaskImage(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<TaskImage>(TasksImages)

}