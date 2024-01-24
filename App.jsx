import React from "react"
import TopText from "./components/TopText"

export default function App() {
        
	const [filesToUpload, setFilesToUpload] = React.useState([])
	
	function handleSubmit(e) {
		e.preventDefault()
		filesToUpload.forEach(file => console.log(file))
	}
	
	function handleChange(e) {
		const filesData = [...e.target.files].map(file => ({
			fileName: file.name,
			fileType: file.type,
			fileSize: file.size
		}))
		setFilesToUpload(filesData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<TopText />
			
			<input 
				type="file"
				required
				multiple
				accept=".png, .jpg, .jpeg, .pdf"
				onChange={handleChange}
			/>
			
			<button>Upload </button>
		</form>
	)
}
