import logo from './logo.svg';
import './App.css';
import FolderUpload from './FolderUpload';

function App() {
  const handleFilesUpload = (json) => {
    console.log('Uploaded JSON:', json);
    // Do something with the uploaded JSON data
  };

  return (
    <div>
      <h1>Folder Upload</h1>
      <FolderUpload onFilesUpload={handleFilesUpload} />
    </div>
  );
}

export default App;
