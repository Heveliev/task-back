path:

get - /api/tasks
post - /api/tasks
req = {    task: string.required,
completed: bool.required.default(false),
}
put - /api/tasks/:id
req = {    task: string.required,
completed: bool.required.default(false),
}
delete - /api/tasks/:id


