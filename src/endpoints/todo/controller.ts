import { Response } from "express";
import { Request } from "../../types";
import Controller from "../Controller";
import Todo from "./model";
import { CreateTodoRequestBody, UpdateTodoRequestBody } from "./types";

//Note: => function is needed to use 'this'
export class TodoController extends Controller {

    /**
     * Get Todos
     */
    public get = async (req: Request, res: Response) => {

        try {
            const todos = await Todo.find()

            return this.ok(res, todos)

        } catch (error) {
            return this.fail(res, "Failed to get todos.")
        }

    }

    /**
     * Get Todo By Id
     */
    public getById = async (req: Request, res: Response) => {

        try {
            const _id = req.params.id

            const todo = await Todo.findOne({ _id })

            if (todo) return this.ok(res, todo)

            return this.notFound(res, "Could not find todo.")

        } catch (error) {
            return this.fail(res, "Failed to get todo.")
        }
    
    }

    /**
     * Create Todo
     */
    public create = async (req: Request<CreateTodoRequestBody>, res: Response) => {

        try {
            const body = req.body

            await Todo.create(body)

            return this.created(res)

        } catch (error) {
            return this.fail(res, "Failed to create todo.")
        }

    }

    /**
     * Update
     */
     public update = async (req: Request<UpdateTodoRequestBody>, res: Response) => {

        try {
            const _id = req.params.id
            const body = req.body

            await Todo.updateOne({ _id }, body)

            return this.ok(res)

        } catch (error) {
            return this.fail(res, "Failed to update todo.")
        }

    }

    /**
     * Delete
     */
     public delete = async (req: Request, res: Response) => {

        try {
            const _id = req.params.id

            await Todo.deleteOne({ _id })

            return this.ok(res)

        } catch (error) {
            return this.fail(res, "Failed to delete todo.")
        }

    }

}