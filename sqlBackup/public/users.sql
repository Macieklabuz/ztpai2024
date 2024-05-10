create table users
(
    id              integer      default nextval('users_id_seq'::regclass) not null
        constraint id
            primary key,
    email           varchar(255)                                           not null,
    password        varchar(255),
    id_user_details integer      default 0                                 not null
        constraint users_users_details_id_details_fk
            references users_details,
    user_type       varchar(255) default 'user'::character varying         not null
);

alter table users
    owner to postgres;

