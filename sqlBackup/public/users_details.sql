create table users_details
(
    id_details integer default nextval('users_details_id_seq'::regclass) not null
        constraint users_details_pk
            primary key,
    name       varchar(255)                                              not null,
    surname    varchar(255)                                              not null
);

alter table users_details
    owner to postgres;

