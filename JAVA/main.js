// Event listener for button
document.getElementById("myButton").addEventListener("click", function() {
  Swal.fire({
      title: 'Are you sure?',
      text: 'You cannot go back!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES',
      cancelButtonText: 'NO'
  }).then((result) => {
      if (result.isConfirmed) {
          console.log('Confirmed!');
      } else {
          console.log('Cancelled!');
      }
  });
});