document.getElementById('saveButton').addEventListener('click', () => {
  const text = document.getElementById('one').value;
  const text2 = document.getElementById('two').value; // Get the text from the textarea
  const blob = new Blob([text], { type: 'text/plain' });
  const blob2 = new Blob([text2], { type: 'text/plain' });  // Create a Blob containing the text
  const fileName = 'hac.txt';                        // Specify the file name

  // Create a temporary link element
  const link = document.createElement('a');
  const link2 = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link2.href = URL.createObjectURL(blob2);
  link.download = fileName; // Set the file name for download
  link.click();
  link2.download = fileName; // Set the file name for download
  link2.click();             // Trigger the download

  // Cleanup: Revoke the object URL after download
  setTimeout(() => {
    URL.revokeObjectURL(link.href);
  }, 100);

   setTimeout(() => {
    URL.revokeObjectURL(link2.href);
  }, 100);
});
