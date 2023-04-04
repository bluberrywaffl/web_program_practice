let postData;

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    postData = data;
  });

  const postURL = "https://jsonplaceholder.typicode.com/todos";

  fetch(postURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
  .then((response) => response.json())
  .then((data) => console.log(data));

  //POST 데이터를 받아오지 않은 상태로 실행이 되었다. 그래서 test2와 다르게 뒤의 부차적인 내용이 안 출력된다.