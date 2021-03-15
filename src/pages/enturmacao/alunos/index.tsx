import { useEffect, useState } from "react"
import Default from "../../../components/Default"
import api from "../../../services/api"

interface Students{
    id: number,
    name: string,
    registration: string
}

export default function Students({ students }) {
	// // const [students, setStudents] = useState<Students[]>([])
	// const [students, setStudents] = useState([])
	// useEffect(() => {
	// 	api.get('/students')
	// 		.then(response => {
	// 			const { data } = response
	// 			// console.log(data)
	// 			setStudents(data)
	// 		})


	// }, [])
	return (
		<Default>
			<main>

				<h2>alunos</h2>

				{students.map(student =>
					<li key={student.id}>
						{student.id} - {student.name} - {student.registration}
					</li>
				)}
				<p>

				</p>
			</main>

		</Default>
	)
}

export async function getStaticProps(){

	 const { data } = await api.get('/students')
	// const 

	return {
		props:{
			students: data
		}
	}
}