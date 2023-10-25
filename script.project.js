document.addEventListener('DOMContentLoaded', function() {
    const afiliadoForm = document.getElementById('afiliadoForm');
    afiliadoForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const domicilio = document.getElementById('domicilio').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const dni = document.getElementById('dni').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;
        const nivelEstudios = document.getElementById('nivelEstudios').value;
        const profesion = document.getElementById('profesion').value;
        const obraSocial = document.getElementById('obraSocial').value;

        // Datos en el localstorage
        const registro = {
            nombre,
            email,
            telefono,
            domicilio,
            fechaNacimiento,
            dni,
            apellido,
            edad,
            nivelEstudios,
            profesion,
            obraSocial
        };

        // Almacenamos registros en localStorage
        guardarRegistro(registro);

        // Via a la pagina de registros luego del registro
        window.location.href = 'registros.html';
    });

    function guardarRegistro(registro) {
        // Obtener registros actuales o inicializar un array vacio
        const registros = JSON.parse(localStorage.getItem('registros')) || [];

        // Agregar el nuevo registro
        registros.push(registro);

        // Almacenar los registros actualizados en localStorage
        localStorage.setItem('registros', JSON.stringify(registros));
    }
});
