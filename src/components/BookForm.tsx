export function BookForm() {
    return (
        <>
            <form action="">
                <div style={{
                    display: "flex",
                    gap: 12,
                    padding: 12
                }}>
                    <input 
                    type="text"
                    placeholder="Nombre"
                    />
                    <input 
                    type="text"
                    placeholder="ISBN"
                    />
                    <input 
                    type="text"
                    placeholder="Autor"
                    />
                    <input 
                    type="text"
                    placeholder="Editorial"
                    />
                </div>
                <div style = {{
                    display: "flex",
                    gap: 12,
                    padding: 12,
                    justifyContent: "center"
                }}>
                    <button>Agregar Libro</button>
                    <button>Tomar Libro</button>
                </div>
            </form>
        </>
    )
}