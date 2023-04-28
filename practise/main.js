import { getAllCategories, deleteCategoryByID } from "./httprequests.js";

let tableBody = document.querySelector("tbody");

getAllCategories().then((data) => {
  data.forEach((supplier) => {
    tableBody.innerHTML += `<tr>
          <th scope="row">${supplier.id}</th>
          <td>${supplier.contactName}</td>
          <td>${supplier.contactTitle}</td>
          <td>${supplier.address.country}</td>
          <td><div>
          <button class = "btn btn-warning" data-id = "${supplier.id}"><i class="fa-regular fa-pen-to-square"></i></button>
          <button class = "btn btn-danger" data-id = "${supplier.id}"><i class="fa-solid fa-trash"></i></button>
          </div></td>
        </tr>`;
  });
  Delete();
});


function Delete() {
  Array.from(tableBody.children).forEach((element) => {
    let deleteBtn = element.children[4].children[0].children[1];
    deleteBtn.addEventListener("click", (e) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
            let id = e.target.getAttribute("data-id");
            deleteCategoryByID(id);

            //delete tr
            e.target.parentElement.parentElement.parentElement.remove();
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    });
  });
}