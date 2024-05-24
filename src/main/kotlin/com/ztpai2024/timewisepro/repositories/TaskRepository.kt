package com.ztpai2024.timewisepro.repositories

import com.ztpai2024.timewisepro.entities.Task
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
}