import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray: any[] = [];
  editingIndex: number | null = null;
  editedTask: any;
  taskFormSubmitted = false;
  warningMessage: string = '';
  showDeleteConfirmation: boolean = false;
  taskToDeleteIndex: number | null = null;
  successMessage: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.todoService.getTodos().subscribe((data: any) => {
      this.taskArray = data;
    });
  }

  openDeleteConfirmation(index: number) {
    this.showDeleteConfirmation = true;
    this.taskToDeleteIndex = index;
  }
  confirmDeletion() {
    if (this.taskToDeleteIndex !== null) {
      this.onDelete(this.taskToDeleteIndex);
      this.closeModal();
    }
  }

  closeModal() {
    this.showDeleteConfirmation = false;
    this.taskToDeleteIndex = null;
  }

  onSubmit(taskForm: any) {
    if (taskForm.valid) {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      const taskData = {
        Title: taskForm.value.taskTitle,
        Description: taskForm.value.taskDescription,
        Date: formattedDate,
        Completed: false
      };

      this.todoService.createTodo(taskData).subscribe((response: any) => {
        this.taskArray.push(response);
        taskForm.resetForm();
        this.warningMessage = '';
        this.successMessage = 'Tarefa criada com sucesso!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      });
    } else {
      this.warningMessage = 'Por favor, preencha todos os campos antes de salvar.';
    }
  }

  onCheck(index: number) {
    if (index >= 0 && index < this.taskArray.length) {
      const task = this.taskArray[index];
      if (task.Completed) {
        task.Completed = true;
        this.todoService.updateTodo(task).subscribe((response: any) => {
          if (response) {
            this.successMessage = 'Tarefa Completada com sucesso!';
            setTimeout(() => {
              this.successMessage = '';
            }, 3000);
          }
        });
      }
    }
  }

  onDelete(index: number) {
    if (index >= 0 && index < this.taskArray.length) {
      const taskIdToDelete = this.taskArray[index].id;

      this.todoService.deleteTodo(taskIdToDelete).subscribe((response: any) => {
        if (response === null) {
          this.taskArray.splice(index, 1);
          this.successMessage = 'Tarefa excluída com sucesso!';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        } else {
          console.error('Erro ao excluir a tarefa.');
        }
      });
    }
  }

  onCancel(index: number) {
    if (index >= 0 && index < this.taskArray.length) {
      this.taskArray[index].editing = false;
      if (this.editedTask) {
        this.taskArray[index] = { ...this.editedTask };
        this.editedTask = null;
        this.taskArray[index].editing = false;
      }
    }
  }

  onEdit(index: number) {
    if (index >= 0 && index < this.taskArray.length) {
      this.taskArray[index].editing = true;
      this.editedTask = { ...this.taskArray[index] };
    }
  }

  onSave(index: number) {
    if (index >= 0 && index < this.taskArray.length) {
      const task = this.taskArray[index];
      task.editing = false;
      this.todoService.updateTodo(task).subscribe((response: any) => {
        if (response) {
          this.successMessage = 'Tarefa editada com sucesso!';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        }
      });
    }
  }
}
