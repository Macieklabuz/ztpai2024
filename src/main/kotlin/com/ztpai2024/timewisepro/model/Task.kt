package com.ztpai2024.timewisepro.model
import java.time.LocalDate
import jakarta.persistence.*

@Entity
@Table(name = "tasks")
data class Task(

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    var id: Long = 0,

    @Column(name = "title")
    var title: String = "",

    @Column(name = "description")
    var description: String = "",

    @Column(name = "dueDate")
    var dueDate: LocalDate = LocalDate.now(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_assigned_by", nullable = false)
    var assignedBy: User? = null,

    @ManyToMany(fetch = FetchType.LAZY)
    var users: MutableList<User> = mutableListOf(),

    @OneToMany(mappedBy = "task",fetch = FetchType.LAZY)
    var tasksImages: MutableList<TaskImages> = mutableListOf()
)

