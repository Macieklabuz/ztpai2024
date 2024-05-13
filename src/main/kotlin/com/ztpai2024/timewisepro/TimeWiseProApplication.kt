package com.ztpai2024.timewisepro

import com.ztpai2024.timewisepro.entities.*
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean

@SpringBootApplication
class TimeWiseProApplication{
	@Bean
	fun init() = CommandLineRunner {
		transaction {
			SchemaUtils.run {
				create(
					Users,
					Tasks,
					TasksImages,
					UsersDetails,
					UsersTasks,
				)
			}
			commit()
		}
	}
}


fun main(args: Array<String>) {

	val db = Database.connect(
		"jdbc:postgresql://localhost:5433/postgres",
		user = "postgres",
		password = "admin")

	runApplication<TimeWiseProApplication>(*args)

}


