package com.ztpai2024.timewisepro.entities

import org.jetbrains.exposed.dao.id.IntIdTable

object TasksImages : IntIdTable() {
    val image = varchar("image", 255)
    val taskId = reference("task_id", Tasks)
}