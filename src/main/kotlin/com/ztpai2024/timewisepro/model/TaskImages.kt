package com.ztpai2024.timewisepro.model
import jakarta.persistence.*


@Entity
@Table(name = "tasks_images")
class TaskImages (

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_tasks_id")
    var id: Long = 0,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_id", nullable = false)
    var task: Task? = null,

    @Lob
    @Column(name = "image", columnDefinition = "bytea")
    var picture: ByteArray? = null,

    )