package com.ztpai2024.timewisepro.entities

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.kotlin.datetime.datetime


object Tasks : IntIdTable() {
    val title = varchar("title", 255)
    val description = varchar("description", 255)
    val dueDate = datetime(name = "due_date")
    val idAssignedBy = reference("id", Users)
}