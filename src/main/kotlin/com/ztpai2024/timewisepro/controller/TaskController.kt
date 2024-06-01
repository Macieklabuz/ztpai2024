package com.ztpai2024.timewisepro.controller

import com.ztpai2024.timewisepro.dtos.TaskDto
import com.ztpai2024.timewisepro.entities.Task
import com.ztpai2024.timewisepro.entities.User
import com.ztpai2024.timewisepro.repositories.TaskRepository
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.util.*

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
    @GetMapping("/tasks/me")
    fun getUserTasks(): List<TaskDTO> = transaction {
        val authentication: Authentication = SecurityContextHolder.getContext().authentication

        val currentUser: User = authentication.principal as User

        val id:Int = currentUser.id.value

        taskRepository.findTasks(id).map { it.toDto()

        }
    }
    @PostMapping("/add")
    fun addTask(@RequestBody taskData: TaskDto): ResponseEntity<TaskDto> {
        return try{
            taskRepository.addTask(taskData)
            ResponseEntity.ok(taskData)
        }catch (e: Exception){
            println("Wystąpił błąd podczas dodawania zadania: ${e.message}")
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(taskData)
        }
    }
    @PostMapping("/upload")
    fun handleFileUpload(@RequestParam("file") file: MultipartFile): ResponseEntity<Map<String, String>> {
        return try{
            val uploadDir = "uploads/tasks"
            val filename = "${UUID.randomUUID()}_${file.originalFilename}"
            val filepath: Path = Paths.get(uploadDir, filename)
            Files.copy(file.inputStream, filepath)
            ResponseEntity.ok(mapOf("fileName" to filename))
        }catch (e: Exception){
            println("Wystąpił błąd podczas przesyłania pliku: ${e.message}")
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(mapOf("error" to "File upload failed"))
        }
    }
    @DeleteMapping("/tasks/{id}")
    fun deleteTask(@PathVariable id: Int): ResponseEntity<String> {
        return try {
            val authentication: Authentication = SecurityContextHolder.getContext().authentication
            val currentUser: User = authentication.principal as User

            val task = transaction { taskRepository.findById(id) }

            if(task == null){
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found")
            }else{
                transaction { taskRepository.deleteTask(id) }
                ResponseEntity.ok("Task deleted")
            }
        }catch (e: Exception){
            println("Error deleting task: ${e.message}")
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting task")
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