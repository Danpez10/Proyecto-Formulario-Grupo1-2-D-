document.addEventListener('DOMContentLoaded', function() {
    const registrosTableBody = document.getElementById('registrosTableBody');

    // Obtener registros guardados
    const registros = obtenerRegistros();

    // Obtener los nombres de los campos
    const campos = [
        'nombre',
        'apellido',
        'email',
        'telefono',
        'domicilio',
        'fechaNacimiento',
        'dni',
        'edad',
        'nivelEstudios',
        'profesion',
        'obraSocial'
    ];

    // Crear una fila de encabezado para los nombres de los campos
    const headerRow = document.createElement('tr');
    campos.forEach((campo) => {
        const headerCell = document.createElement('th');
        headerCell.textContent = campo.toUpperCase(); // Mostrar el nombre del campo en mayusculas
        headerRow.appendChild(headerCell);
    });
    registrosTableBody.appendChild(headerRow);

    // Generar filas de tabla con los registros
    registros.forEach((registro) => {
        const row = document.createElement('tr');
        campos.forEach((campo) => {
            const cell = document.createElement('td');
            cell.textContent = registro[campo];
            row.appendChild(cell);
        });
        registrosTableBody.appendChild(row);
    });

    function obtenerRegistros() {
        // Obtener registros de localStorage
        return JSON.parse(localStorage.getItem('registros')) || [];
    }
});
