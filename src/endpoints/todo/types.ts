export interface Todo {
    title: string,
    description: string,
}

export interface CreateTodoRequestBody extends Todo {}

export interface UpdateTodoRequestBody extends Todo {}