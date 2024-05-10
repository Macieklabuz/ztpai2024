create table tasks
(
    id             integer default nextval('tasks_id_seq'::regclass) not null
        constraint id_tasks
            primary key,
    title          varchar(255)                                      not null,
    description    text,
    due_date       date                                              not null,
    id_assigned_by integer                                           not null
        constraint tasks_users_id_fk
            references users
);

alter table tasks
    owner to postgres;

