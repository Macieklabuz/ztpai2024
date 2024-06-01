package com.ztpai2024.timewisepro.repositories

import com.ztpai2024.timewisepro.controller.TaskDTO
import com.ztpai2024.timewisepro.dtos.TaskDto
import com.ztpai2024.timewisepro.entities.Task
import com.ztpai2024.timewisepro.entities.Tasks
import com.ztpai2024.timewisepro.entities.TasksImages
import com.ztpai2024.timewisepro.entities.User
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Repository
import kotlinx.datetime.LocalDateTime
import kotlinx.datetime.toLocalDateTime
import org.jetbrains.exposed.sql.insert
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder


@Repository
class TaskRepository {

    fun findAll(): List<Task> {
        return transaction {
            Task.all().toList()
        }
    }

    fun findById(id: Int): Task? {
        return transaction {
            Task.findById(id)
        }
    }
    fun findTasks(id: Int): List<Task> {
        return try {
            transaction {
                Task.find { Tasks.idAssignedBy eq id }.toList()
            }
        }
        catch(e:Exception){
            println("Error ${e.message}")
            throw e
        }
    }
    fun addTask(taskData: TaskDto) {
        try {
            transaction {
                val authentication: Authentication = SecurityContextHolder.getContext().authentication
                val currentUser: User = authentication.principal as User
                val dueDate = LocalDateTime.parse(taskData.dueDate)


                val newTask = Task.new {
                    title = taskData.title
                    description = taskData.description
                    this.dueDate = dueDate
                    user = currentUser
                    image = taskData.taskImage
                }



                }
            } catch (e:Exception){
            println("Error adding task ${e.message}")

            throw e
        }
    }
    fun deleteTask(id: Int){
        try{
            transaction{
                val task = Task.findById(id)
                if(task != null){
                    task.delete()

                }else{
                    throw IllegalStateException("You are not allowed to delete this task")
                }
            }
        } catch (e:Exception){
            println("Error deleting task ${e.message}")
            throw e
        }
    }
}