document.addEventListener('DOMContentLoaded', () => {
    const mallaData = [
        // Semestre 1
        { id: 'DQUI1045', name: 'Química General I', semester: 1, prerequisites: [], status: 'disponible', type: 'disciplinar' },
        { id: 'DBIO1004', name: 'Biología Celular', semester: 1, prerequisites: [], status: 'disponible', type: 'disciplinar' },
        { id: 'DCEN1032', name: 'Matemática', semester: 1, prerequisites: [], status: 'disponible', type: 'disciplinar' },
        { id: 'QFAR0003', name: 'Intro. a las Cs. Farmacéuticas', semester: 1, prerequisites: [], status: 'disponible', type: 'profesional' },
        { id: 'QFAR0001', name: 'Integrado de Habilidades del QF', semester: 1, prerequisites: [], status: 'disponible', type: 'profesional' },
        { id: 'FORI1004', name: 'Antropología', semester: 1, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 2
        { id: 'DQUI1044', name: 'Química General II', semester: 2, prerequisites: ['DQUI1045'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DCEN1033', name: 'Cálculo Diferencial', semester: 2, prerequisites: ['DCEN1032'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DCEN1034', name: 'Física', semester: 2, prerequisites: ['DCEN1032'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DCEN1035', name: 'Bioestadística', semester: 2, prerequisites: ['DCEN1032'], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'QFAR0002', name: 'Fundamentos del Quehacer Farmacéutico', semester: 2, prerequisites: ['QFAR0001'], status: 'bloqueado', type: 'profesional' },
        { id: 'FORI1010', name: 'Ética', semester: 2, prerequisites: ['FORI1004'], status: 'bloqueado', type: 'identidad' },
        // Semestre 3
        { id: 'DQUI1041', name: 'Química Analítica', semester: 3, prerequisites: ['DQUI1044'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DQUI1032', name: 'Química Orgánica', semester: 3, prerequisites: ['DQUI1044'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DQUI1042', name: 'Fisicoquímica', semester: 3, prerequisites: ['DQUI1044', 'DCEN1033', 'DCEN1034'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DMOR1011', name: 'Fisiología Integrada', semester: 3, prerequisites: ['DBIO1004'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DSAP1017', name: 'Salud Poblacional', semester: 3, prerequisites: [], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'ELEC0018', name: 'Gestión personal y Habilidades para la vida', semester: 3, prerequisites: [], status: 'disponible', type: 'profesional' }, // CORREGIDO
        // Semestre 4
        { id: 'DQUI1043', name: 'Análisis Instrumental', semester: 4, prerequisites: ['DQUI1041', 'DQUI1042'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DQUI1047', name: 'Química Orgánica Avanzada', semester: 4, prerequisites: ['DQUI1032'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DBIO1005', name: 'Bioquímica General', semester: 4, prerequisites: ['DQUI1032', 'DMOR1011'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DMOR1012', name: 'Fisiopatología', semester: 4, prerequisites: ['DMOR1011'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DSAP1019', name: 'Epidemiología', semester: 4, prerequisites: ['DSAP1017', 'DCEN1035'], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'HITO1', name: 'Hito Evaluativo Integrativo', semester: 4, prerequisites: ['DQUI1041','DQUI1032','DQUI1042','DMOR1011','DSAP1017','ELEC0018'], status: 'bloqueado', type: 'hito' },
        // Semestre 5
        { id: 'QFAF1001', name: 'Farmacología I', semester: 5, prerequisites: ['DBIO1005', 'DMOR1012'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DSAP1018', name: 'Salud Digital', semester: 5, prerequisites: [], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'DBMI1001', name: 'Microbiología General', semester: 5, prerequisites: ['DBIO1005'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'QFAE1001', name: 'Tecnología Farmacéutica I', semester: 5, prerequisites: ['DQUI1042'], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAE1002', name: 'Química Farmacéutica I', semester: 5, prerequisites: ['DQUI1047'], status: 'bloqueado', type: 'profesional' },
        { id: 'FORS1005', name: 'Persona y Sociedad', semester: 5, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 6
        { id: 'QFAF1002', name: 'Farmacología II', semester: 6, prerequisites: ['QFAF1001'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DBET1007', name: 'Bioética', semester: 6, prerequisites: [], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'QFAE1003', name: 'Tecnología Farmacéutica II', semester: 6, prerequisites: ['QFAE1001'], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAE1004', name: 'Química Farmacéutica II', semester: 6, prerequisites: ['QFAE1002', 'QFAF1001'], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAF1005', name: 'Práctica I', semester: 6, prerequisites: ['QFAE1001','QFAE1002'], status: 'bloqueado', type: 'profesional' },
        { id: 'ELEC0181', name: 'Electivo I: Formación de Identidad', semester: 6, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 7
        { id: 'DEBC1001', name: 'Metodología de Investigación', semester: 7, prerequisites: [], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAC1001', name: 'Farmacia Clínica y Atención Farmacéutica I', semester: 7, prerequisites: ['QFAF1002', 'DMOR1012'], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAC1002', name: 'Legislación Farmacéutica', semester: 7, prerequisites: ['QFAR0002'], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAF1003', name: 'Farmacognosia y Fitoterapia', semester: 7, prerequisites: ['DQUI1047'], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAC1003', name: 'Control y Aseguramiento de Calidad', semester: 7, prerequisites: [], status: 'bloqueado', type: 'profesional' },
        { id: 'ELEC0182', name: 'Electivo II: Formación de Identidad', semester: 7, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 8
        { id: 'QFAC1004', name: 'Farmacia Clínica y Atención Farmacéutica II', semester: 8, prerequisites: ['QFAC1001'], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAF1004', name: 'Biofarmacia', semester: 8, prerequisites: ['QFAF1002','QFAE1003'], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAC1005', name: 'Toxicología', semester: 8, prerequisites: ['QFAF1002','DBIO1005'], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAC1006', name: 'Farmacia Asistencial', semester: 8, prerequisites: [], status: 'bloqueado', type: 'profesional' },
        { id: 'QFAC1007', name: 'Práctica II: Farmacia Comunitaria', semester: 8, prerequisites: ['QFAF1005','QFAC1001'], status: 'bloqueado', type: 'profesional' },
        { id: 'HITO2', name: 'Hito Evaluativo Interprofesional', semester: 8, prerequisites: ['DEBC1001', 'QFAC1001','QFAC1002','QFAF1003','QFAC1003','ELEC0182','QFAF1002','DBET1007','QFAE1003','QFAE1004','QFAF1005','ELEC0181'], status: 'bloqueado', type: 'hito' },
        // Semestre 9
        { id: 'QFAM1001', name: 'Gestión y Marketing Farmacéutico', semester: 9, prerequisites: [], status: 'bloqueado', type: 'profesional' }, // CORREGIDO
        { id: 'QFAH1001', name: 'Farmacovigilancia y Tecnovigilancia', semester: 9, prerequisites: ['QFAC1004','QFAF1004'], status: 'bloqueado', type: 'profesional' },
        { id: 'ELEC0184', name: 'Electivo I', semester: 9, prerequisites: ['HITO2'], status: 'bloqueado', type: 'identidad' },
        { id: 'ELEC0186', name: 'Electivo II', semester: 9, prerequisites: ['HITO2'], status: 'bloqueado', type: 'identidad' },
        { id: 'ELEC0185', name: 'Electivo III', semester: 9, prerequisites: ['HITO2'], status: 'bloqueado', type: 'identidad' },
        { id: 'ELEC0183', name: 'Electivo III: Formación e Identidad', semester: 9, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 10
        { id: 'INTE1001', name: 'Internado', semester: 10, prerequisites: ['QFAC1004','QFAF1004','QFAC1005','QFAC1006','QFAC1007'], status: 'bloqueado', type: 'profesional' },
    ];

    const container = document.getElementById('malla-container');

    function renderMalla() {
        container.innerHTML = '';
        for (let i = 1; i <= 10; i++) {
            const semestreCol = document.createElement('div');
            semestreCol.classList.add('semestre-columna');
            semestreCol.innerHTML = `<div class="semestre-titulo">${i}° Semestre</div>`;

            const ramosDelSemestre = mallaData.filter(ramo => ramo.semester === i);

            ramosDelSemestre.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.classList.add('ramo', ramo.status, ramo.type);
                ramoDiv.dataset.id = ramo.id;

                ramoDiv.innerHTML = `
                    <span class="ramo-nombre">${ramo.name}</span>
                    <span class="ramo-codigo">${ramo.id}</span>
                `;

                ramoDiv.addEventListener('click', () => toggleRamoStatus(ramo.id));
                semestreCol.appendChild(ramoDiv);
            });
            container.appendChild(semestreCol);
        }
    }

    function toggleRamoStatus(ramoId) {
        const ramo = mallaData.find(r => r.id === ramoId);
        if (!ramo) return;

        if (ramo.status === 'disponible') {
            ramo.status = 'aprobado';
        } else if (ramo.status === 'aprobado') {
            ramo.status = 'bloqueado';
        } else if (ramo.status === 'bloqueado') {
            if (ramo.prerequisites.length === 0) {
                 ramo.status = 'disponible';
            }
        }
        
        updateAllStatuses();
        renderMalla();
    }

    function updateAllStatuses() {
        const aprobados = new Set(mallaData.filter(r => r.status === 'aprobado').map(r => r.id));

        mallaData.forEach(ramo => {
            if (ramo.status === 'aprobado') {
                return; 
            }
            
            const prerequisitosCumplidos = ramo.prerequisites.every(prereqId => aprobados.has(prereqId));

            if (prerequisitosCumplidos) {
                ramo.status = 'disponible';
            } else {
                ramo.status = 'bloqueado';
            }
        });
    }

    // Inicialización
    updateAllStatuses();
    renderMalla();
});