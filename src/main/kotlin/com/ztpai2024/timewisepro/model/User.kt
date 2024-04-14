package com.ztpai2024.timewisepro.model
import jakarta.persistence.*

@Entity
@Table(name = "users")
data class User(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    @Column(name = "email", nullable = false)
    var email: String="",

    @Column(name = "password", nullable = false)
    var password: String="",

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user_details", nullable = false)
    var idUserDetils: UserDetails? = null,

    @Column(name = "user_type", nullable = false)
    var type: String = "USER",

    @ManyToMany(fetch = FetchType.LAZY)
    var tasks: MutableList<Task> = mutableListOf(),

    @OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
    var task: Task? = null
)