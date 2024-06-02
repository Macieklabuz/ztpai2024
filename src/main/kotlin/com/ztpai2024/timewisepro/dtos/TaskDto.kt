package com.ztpai2024.timewisepro.dtos

import com.ztpai2024.timewisepro.entities.Task
import com.ztpai2024.timewisepro.entities.Tasks.idAssignedBy
import kotlinx.datetime.toJavaLocalDateTime
import java.time.format.DateTimeFormatter

data class TaskDto(
    val id: Int,
    val title: String,
    val taskImage: String,
    val description: String,
    val dueDate: String,
    val idAssignedBy: Int,
)

fun Task.toDto(): TaskDto {
    val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss")
    val formattedDueDate = dueDate.toJavaLocalDateTime().format(formatter)
    return TaskDto(
        id.value,
        title,
        image ?: "",
        description,
        formattedDueDate,
        user.id.value
    )
}
