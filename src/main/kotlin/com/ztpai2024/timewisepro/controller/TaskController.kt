package com.ztpai2024.timewisepro.controller

import com.ztpai2024.timewisepro.entities.Task
import com.ztpai2024.timewisepro.repositories.TaskRepository
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/users")
class TaskController (
    private val taskRepository: TaskRepository,
){
    @GetMapping("/tasks")
    fun getAllTasks(): List<TaskDTO> = transaction {
        taskRepository.findAll().map { it.toDto()

        }
    }
}

data class TaskDTO(
    val id: Int,
    val title: String,
    val description: String,
    val dueDate: String,
    val image: String?
)

fun Task.toDto()=TaskDTO(
    id = id.value,
    title = title,
    description = description,
    dueDate = dueDate.toString(),
    image = image
)