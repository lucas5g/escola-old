function Login() {
    return (

        <div className="bg-indigo-100 grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
                <div className="flex-grow">
                    <h1 className="text-white text-center text-2xl sm:text-5xl mb-2 ">

                        Seja bem-vindo(a)
                    </h1>
                </div>
            </div>
            <div className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48">
                <div className="flex-grow bg-white shadow-xl rounded-md border border-gray-300 p8">
                    <div className="sm:flex sm:items-center">
                        <img src="image.jpg" alt="img" className="sm:flex-shrink-0 mx-auto sm:mx-0 h-24 rounded-full" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login