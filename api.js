fetch("http://test.bosotournaments.com/teams")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // use the data in the DOM - UI - html css
    const table = document.querySelector("table")
    data.forEach((team) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${team.name}</td>
            <td>${team.sport}</td>
            <td>${team.category}</td>
        `;
        table.appendChild(row);
    })
    
  }
);
// CORS - Cross Origin Resource Sharing
// Same Origin Policy - SOP
// CORS is a security feature implemented by browsers to restrict web pages from making requests to a different domain than the one that served the web page. It allows servers to specify who can access their resources and how they can be accessed.
