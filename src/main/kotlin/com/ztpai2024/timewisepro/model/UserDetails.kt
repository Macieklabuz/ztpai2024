package com.ztpai2024.timewisepro.model
import jakarta.persistence.*

@Entity
@Table(name = "users_details")
data class UserDetails(
    @Column(name = "id_details", nullable = false)
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,

    @Column(name = "name", nullable = false)
    var name: String="",

    @Column(name = "surname", nullable = false)
    var surname: String="",
)