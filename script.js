document.getElementById('saveBtn').addEventListener('click', function () {
    const text = document.getElementById('textInput').value;
    const fileType = document.getElementById('fileType').value;
    let fileName = 'output';
    let mimeType = 'text/plain';

    // Set file name and MIME type based on selected file type
    switch (fileType) {
        case 'txt':
            fileName += '.txt';
            mimeType = 'text/plain';
            break;
        case 'html':
            fileName += '.html';
            mimeType = 'text/html';
            break;
        case 'md':
            fileName += '.md';
            mimeType = 'text/markdown';
            break;
        default:
            fileName += '.txt';
            mimeType = 'text/plain';
    }

    // Create a Blob with the text and MIME type
    const blob = new Blob([text], { type: mimeType });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
});