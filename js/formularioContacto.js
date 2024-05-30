function validar() {
    let producto = document.getElementById('producto');
    let celular = document.getElementById('celular');
    let consulta = document.getElementById('consulta');
    
    let errorProducto = document.getElementById('errorProducto');
    let errorCelular = document.getElementById('errorCelular');
    let errorConsulta = document.getElementById('errorConsulta');
    let mensajeExito = document.getElementById('mensajeExito');
    
    let esValido = true;
     
    errorProducto.style.display = 'none';
    errorCelular.style.display = 'none';
    errorConsulta.style.display = 'none';
    mensajeExito.style.display = 'none';
    
    producto.classList.remove('inputError');
    celular.classList.remove('inputError');
    consulta.classList.remove('inputError');
    
    if (producto.value === '') {
        errorProducto.textContent = 'Por favor seleccione un producto.';
        errorProducto.style.display = 'block';
        producto.classList.add('inputError');
        esValido = false;
    }
    
    let patronCelular = /^[1-9][0-9]{9}$/;
    if (!patronCelular.test(celular.value)) {
        errorCelular.textContent = 'El celular debe tener 10 dígitos y no comenzar con cero.';
        errorCelular.style.display = 'block';
        celular.classList.add('inputError');
        esValido = false;
    }
    
    if (consulta.value.trim() === '') {
        errorConsulta.textContent = 'Por favor ingrese su consulta.';
        errorConsulta.style.display = 'block';
        consulta.classList.add('inputError');
        esValido = false;
    }
    
    if (esValido) {
        mensajeExito.textContent = 'La consulta fue enviada correctamente.';
        mensajeExito.style.display = 'block';
        
        producto.value = '';
        celular.value = '';
        consulta.value = '';
        document.getElementById('medidas').value = '';
    }
    
    return false;
}
