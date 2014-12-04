
        var introguide = introJs();
        
        
        introguide.setOptions({
            steps: [
                {
                     element: '#id1',
                     intro: 'Barra de navegacion, permite acceder a la visualizacion, un documento explicando el origen de los datos, informacion sobre el proyecto y los datos abiertos y el codigo fuente de la aplicacion'
                },
                {
                    element: '#numeros',
                    intro: 'Con un click se puede seleccionar que datos mostrar por estado en el mapa del paraguay'
                },
                {
                   element:'#porcentajes' ,
                   intro: 'Con un click se puede seleccionar que datos mostrar por estado en un grafico de torta'
                },
                {
                    element:'#map' ,
                    intro: 'Permite mostrar la informacion del Paraguay dividia en departamentos, la informacion puede ser: <br>Matriculados(la cantidad de alumnos matriculados)<br>Muebles(el monto en millones de guaranies invertido en muebles)<br>Superficie(la superficie de los establecimientos en miles metros cuadrados)<br>Docentes(el monto en millones de guaranies invertido en salario de funcionarios docentes)'
                },
                {
                    element:'#barra' ,
                    intro: 'Muestra toda la informacion disponible(Matriculados, Muebles, Superficie y Docentes) de un departamento en porcentaje'
                }
                
                
            ]
        });

