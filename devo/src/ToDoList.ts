import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('todo-list')
class TodoList extends LitElement {
  @property({ type: Array }) todos: string[] = [];
  @property({ type: String }) newTodo: string = '';

  static styles = css`
    .todo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .todo-input {
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }
    .todo-input input {
      padding: 5px;
      font-size: 1rem;
    }
    .todo-input button {
      margin-left: 10px;
      padding: 5px 10px;
      font-size: 1rem;
      cursor: pointer;
    }
    .todo-list {
      list-style-type: none;
      padding: 0;
      width: 100%;
      max-width: 300px;
    }
    .todo-list li {
      background: #f3f3f3;
      margin: 5px 0;
      padding: 10px;
      border-radius: 5px;
    }
  `;

  addTodo() {
    if (this.newTodo) {
      this.todos = [...this.todos, this.newTodo];
      this.newTodo = '';
    }
  }

  handleInputChange(e: Event) {
    this.newTodo = (e.target as HTMLInputElement).value;
  }

  render() {
    return html`
      <div class="todo-container">
        <div class="todo-input">
          <input type="text" .value="${this.newTodo}" @input="${this.handleInputChange}" placeholder="Add a new task">
          <button @click="${this.addTodo}">Add</button>
        </div>
        <ul class="todo-list">
          ${this.todos.map(todo => html`<li>${todo}</li>`)}
        </ul>
      </div>
    `;
  }
}

export default TodoList;
