let students = JSON.parse(localStorage.getItem("students")) || [];
  const tableBody = document.getElementById("tableBody");

  function processor() {
    tableBody.innerHTML = "";
    students.forEach((s, i) => {
      tableBody.innerHTML += `
        <tr class="border-b">
          <td class="p-2">${s.name}</td>
          <td>${s.sid}</td>
          <td>${s.email}</td>
          <td>${s.contact}</td>
          <td class="space-x-2">
            <button onclick="editStudent(${i})"
              class="bg-yellow-400 px-2 py-1 rounded hover:scale-95 transition duration-300">Edit</button>
            <button onclick="deleteStudent(${i})"
              class="bg-red-500 text-white px-2 py-1 rounded hover:scale-95 transition duration-500">Delete</button>
          </td>
        </tr>`;
    });
    localStorage.setItem("students", JSON.stringify(students));
  }

  document.getElementById("studentForm").addEventListener("submit", e => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let sid = document.getElementById("sid").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let editIndex = document.getElementById("editIndex").value;

    if (!name || !sid || !email || !contact) {
      alert("All fields required");
      return;
    }
    if (!/^[A-Za-z ]+$/.test(name)) return alert("Name only letters");
    if (!/^[0-9]+$/.test(sid)) return alert("ID only numbers");
    if (!/^[0-9]{10,}$/.test(contact)) return alert("Contact min 10 digits");

    let data = { name, sid, email, contact };

    if (editIndex === "") {
      students.push(data);
    } else {
      students[editIndex] = data;
      document.getElementById("editIndex").value = "";
    }

    e.target.reset();
    processor();
  });

  function deleteStudent(i) {
    students.splice(i, 1);
    processor();
  }

  function editStudent(i) {
    let s = students[i];
    name.value = s.name;
    sid.value = s.sid;
    email.value = s.email;
    contact.value = s.contact;
    editIndex.value = i;
  }

  processor();