package com.ztpai2024.timewisepro.repositories

import com.ztpai2024.timewisepro.controller.TaskDTO
import com.ztpai2024.timewisepro.entities.Task
import com.ztpai2024.timewisepro.entities.Tasks
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Repository

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
    fun addTask(TaskData: TaskDTO){
        try{
            transaction{
                val newTask = Task.new {
                    title = TaskData.title
                    description = TaskData.description
                    image = TaskData.image
                    dueDate = TaskData.dueDate
                }
            }
        }
        catch (e:Exception){
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