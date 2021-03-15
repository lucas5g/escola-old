import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const students = [
        { id: 1, name: 'Lucas', registration: 'ca789456' },
        { id: 2, name: 'Lucas', registration: 'teste' },
        { id: 3, name: 'Marcos', registration: 'ca789456' }
    ]
    res.json(
        students
    )
}