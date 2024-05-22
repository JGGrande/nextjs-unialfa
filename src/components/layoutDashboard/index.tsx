export const LayoutDashboard = () => {
    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-gray-900 flex md:flex-row flex-wrap md:flex-nowrap items-center justify-between p-0">
                <a href="#" className="navbar-brand col-md-3 col-lg-2 px-3 me-auto">
                    Painel 1Pitchau
                </a>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed bg-gray-600 text-gray-300"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="w-full"></div>
                <div className="navbar-nav flex-row">
                    <div className="nav-item text-nowrap">
                        <a href="#" className="nav-link px-3 text-gray-300">Sair</a>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="sticky top-0 pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="/dashboard" className="nav-link">
                                        <span data-feather="home" />
                                        Dashboard
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-auto col-lg-10 px-4">
                        {/* Conteúdo principal aqui */}
                    </main>
                </div>
            </div>
        </>
    )
}