document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
  });
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  Swal.fire('Hello World!');
  Swal.fire({
    title:' Are u sure',
    text: 'You cant back down',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'YES',
    cancelButtonText: 'NO'
  });
  Swal.fire({
    title: 'Do u want to delete?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'YES',
    cancelButtonText: 'NO'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log('DELETE!');
    } else {
      console.log('CANCEL');
    }
  });