import { Injectable } from '@angular/core';
import { list, task } from '../models/list'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private listDB: Array<list> = [
    {
      "name": "list 1",
      "_id": "l1",
      "tasks": [
        {
          "id": "t1",
          "txt": "l1-t1",
          "isDone": false,
          "isEditingMode": false,
          "isOptionsMenuOpen":false
        },
        {
          "id": "t2",
          "txt": "l1-t2",
          "isDone": false,
          "isEditingMode": false,
          "isOptionsMenuOpen":false
        }
      ]
    },
    {
      "name": "list 2",
      "_id": "l2",
      "tasks": [
        {
          "id": "t3",
          "txt": "l2-t3",
          "isDone": false,
          "isEditingMode": false,
          "isOptionsMenuOpen":false
        },
        {
          "id": "t4",
          "txt": "l2-t4",
          "isDone": false,
          "isEditingMode": false,
          "isOptionsMenuOpen":false
        }
      ]
    },
  ]
  constructor() { }

  private activeList = this.listDB[0]._id
  private currTasks = this.listDB[0]._id.tasks

  public async getLists(): Promise<list[]> {
    return await this.listDB
  }

  public setActiveList(listId: any) {
    type listId = string | null
    this.activeList = listId
  }

  public getActiveList() {
    return this.activeList
  }

  public setTasksByListId(id: string | null) {
    const currList: any = this.listDB.find((l) => l._id === id)
    this.currTasks = currList?.tasks
    return this.currTasks
  }

  public getTasks() {
    return this.currTasks
  }

  public addTask(task: task) {
    const currList: any = this.listDB.find((l) => l._id === this.activeList)
    currList.tasks.unshift(task)
  }

  public editTask(task: task) {
    const currList: any = this.listDB.find((l) => l._id === this.activeList)
    const taskIdx = currList.tasks.findIndex((t: any) => t.id === task.id)
    currList.tasks.splice(taskIdx,1,task)
  }

  public deleteTask(task: task) {
    const currList: any = this.listDB.find((l) => l._id === this.activeList)
    const taskIdx = currList.tasks.findIndex((t: any) => t.id === task.id)
    currList.tasks.splice(taskIdx,1)
  }
}