create table tasks_images
(
    image_tasks_id serial
        constraint tasks_images_pk
            primary key,
    task_id        integer      not null
        constraint tasks_images_tasks_id_fk
            references tasks,
    image          varchar(255) not null
);

alter table tasks_images
    owner to postgres;

