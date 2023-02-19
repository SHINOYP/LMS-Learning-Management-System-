import React, { useState } from 'react';

function Chat() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch('http://localhost:4000/api/singleFile', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onDownload = async () => {
    try {
      const response = await fetch(`'http://localhost:4000/api/getSingleFiles`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
        <button>ssd</button>
      </form>
      <h1>File Download</h1>
      <button onClick={onDownload}>Download</button>
    </div>
  );
}

export default Chat;
