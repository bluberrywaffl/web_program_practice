import { todoList } from "./todo.js";

//UI 모듈 정의
const app = {
    todoList: document.getElementById("todoList"), 
    form: document.querySelector("form"),
    titleInput: document.getElementById("title"),
    dueDateInput: document.getElementById("dueDate"),

    //rendering To-Do 항목

    renderItem(item) {
        const li = document.createElement("li");
        if (item.completed) {
            //항목 완료 여부에 따라 css 클래스 추가
            li.classList.add("completed");
        }

        const titleText = document.createElement("dive");
        titleText.textContent = `${item.title} - ${item.dueDate}`;
        titleText.classList.add("title"); //css 클래스 추가

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "✔️"; //텍스트 설정 
        toggleBtn.addEventListener("click", () => {
            todoList.toggleComplete(item);
            this.renderList();
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "🗑️";
        removeBtn.addEventListener("click", () => {
            todoList.remove(item);
            this.renderList();
        });

        li.appendChild(toggleBtn);
        li.appendChild(removeBtn);
        li.appendChild(titleText);
        this.todoList.appendChild(li);
    },

    renderList() {
        this.todoList.innerHTML = "";
        todoList.items.forEach((item) => {
            this.renderItem(item);
        });
    },

    init() {
        todoList.load();
        this.renderList();

        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = this.titleInput.value;
            const dueDate = this.dueDateInput.value;

            if (title && dueDate) {
                const item = todoList.add(title, dueDate);
                this.renderItem(item);
                this.titleInput.value = "";
                this.dueDateInput.value = "";
            }
        });
    },
};

app.init();