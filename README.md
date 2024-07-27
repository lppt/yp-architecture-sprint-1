# Разделение проекта Mesto на микрофронты

## Предварительный анализ

### Сложность.

Проект довольно простой, и хорошо организованный на данном этапе разделить его не сложно будет разделить

### Цель перехода

Яндекс-практикуемся, подготавливаем проект к резкому росту кодовой базы и расширению функционала

### Опыт команды

Опыт у меня с микрофронтами так себе, но что не сделаешь чтобы стать лучше

## Определяем бизнес функции

1. Работа с фотографиями

- Просмотр ленты
- Загрузка фотографий
- Удаление фотографий
- Сбор лайков

2. Авторизация и регистрация
3. Настройка профиля

## Определяем метод реализации

Так как проект не очень сложный, и к тому же предполагает быструю отзывчивость,
то предлагается использовать Build time

## Инструмент

Изначально планировалось исопльзовать Wepack module federation,
но посмотрев на примеры в интернете и немного поизучав, было принято решение
использовать rspack, т.к. он был спроектирован так, чтобы гладко заменить webpack,
при этом получив прирост в производительность

## Межмодульное взаимодействие

Пока еще проект не большой и из глобального состояния нас интересуют только пользователь,
так что его можем взять из модуля авторизации

## Структура проекта

Проект разделен на следующие микрофронты

1. auth - Аутентификация и регистрация
2. dashboard - Лента фоторгафий, добавление и удаление
3. profile - Управление профилем
4. shell - Оболочка, которая это все собирает

Так же отдельно выделен набор общих библиотек utils

## Запуск проекта

pnpm i
pnpm start

# Ссылка на второе задание

Вот ссылка на драйв: https://drive.google.com/file/d/1BWAYgOd460ORsV4BTI2jMFNwiQ809FAp/view?usp=sharing

На всякий случай в этом же репозитории лежит файл исходник praktikum_arch_template.drawio.xml
