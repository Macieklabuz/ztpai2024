create table users_tasks
(
    id_user integer not null
        constraint user_users_tasks___fk
            references users,
    id_task integer not null
        constraint task_users_tasks___fk
            references tasks
);

alter table users_tasks
    owner to postgres;

