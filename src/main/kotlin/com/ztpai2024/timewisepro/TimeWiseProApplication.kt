package com.ztpai2024.timewisepro

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.jetbrains.exposed.sql.Database
@SpringBootApplication
class TimeWiseProApplication

fun main(args: Array<String>) {
	runApplication<TimeWiseProApplication>(*args)

	val db = Database.connect("jdbc:postgresql://localhost:5432/postgres", driver = "org.postgresql.Driver", user = "postgres", password = "admin")
}


