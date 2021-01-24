export default (req, res) => {
    const students = [
        {id: 1, name: 'Lucas', registrarion: 'ca789456'},
        {id: 2, name: 'Lucas', registrarion: 'ca789456'},
        
    ]
    res.json(
        students
    )
}