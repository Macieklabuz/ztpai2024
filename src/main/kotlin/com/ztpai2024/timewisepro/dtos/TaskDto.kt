package com.ztpai2024.timewisepro.dtos

import com.ztpai2024.timewisepro.entities.Task
import com.ztpai2024.timewisepro.entities.Tasks.idAssignedBy

data class TaskDto(
    val id: Int,
    val title: String,
    val taskImage: String,
    val description: String,
    val dueDate: String,
    val idAssignedBy: Int,
)

fun Task.toDto() = TaskDto(
    id.value,
    title,
    image,
    description,
    dueDate,
    idAssignedBy,
)
