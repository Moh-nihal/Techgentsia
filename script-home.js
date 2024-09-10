document.addEventListener("DOMContentLoaded", function () {
  const employeeTableBody = document.querySelector("#employeeTable tbody");

  fetch("http://demo6700699.mockable.io/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data && data.length > 0) {
        data.forEach((employee) => {
          const row = document.createElement("tr");

          row.innerHTML = `
                        <td>${employee.name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.phone}</td>
                        <td>${employee.age}</td>
                        <td>${employee.country}</td>
                    `;

          employeeTableBody.appendChild(row);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching employee data:", error);
    });

  document.getElementById("logoutBtn").addEventListener("click", function () {
    window.location.href = "Landingpage.html";
  });
});
