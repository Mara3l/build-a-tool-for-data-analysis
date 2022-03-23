create table users
(
    id         serial not null,
    first_name varchar,
    last_name  varchar,
    city       varchar,
    age        numeric,
    gender     varchar,
    primary key (id)
);

create table products
(
    id    serial not null,
    name  varchar,
    type  varchar,
    price decimal,
    cost  decimal,
    primary key (id)
);

create table orders
(
    id         serial not null,
    user_id    serial not null,
    status     varchar,
    created_at date,
    solved_at  date,
    primary key (id),
    foreign key (user_id) references users (id)
);

create table order_items
(
    id         serial not null,
    order_id   serial not null,
    product_id serial not null,
    quantity   numeric,
    foreign key (order_id) references orders (id),
    foreign key (product_id) references products (id)
);