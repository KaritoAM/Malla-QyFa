document.addEventListener('DOMContentLoaded', () => {
    const mallaData = [
        // Semestre 1
        { id: 'DQUI1045', name: 'Química General I', semester: 1, prerequisites: [], status: 'disponible', type: 'disciplinar' },
        { id: 'DBIO1091', name: 'Biología Celular', semester: 1, prerequisites: [], status: 'disponible', type: 'disciplinar' },
        { id: 'DCEN1032', name: 'Matemática', semester: 1, prerequisites: [], status: 'disponible', type: 'disciplinar' },
        { id: 'QFAR0003', name: 'Intro. a las Cs. Farmacéuticas', semester: 1, prerequisites: [], status: 'disponible', type: 'profesional' },
        { id: 'QFAR0001', name: 'Integrado de Habilidades del QF', semester: 1, prerequisites: [], status: 'disponible', type: 'profesional' },
        { id: 'FORI1004', name: 'Antropología', semester: 1, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 2
        { id: 'DQUI1046', name: 'Química General II', semester: 2, prerequisites: ['DQUI1045'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DCEN1033', name: 'Cálculo Diferencial', semester: 2, prerequisites: ['DCEN1032'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DCEN1034', name: 'Física', semester: 2, prerequisites: ['DCEN1032'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DCEN1035', name: 'Bioestadística', semester: 2, prerequisites: ['DCEN1032'], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'QFAR0002', name: 'Fundamentos del Quehacer Farmacéutico', semester: 2, prerequisites: ['QFAR0001'], status: 'bloqueado', type: 'profesional' },
        { id: 'FORI1010', name: 'Ética', semester: 2, prerequisites: ['FORI1004'], status: 'bloqueado', type: 'identidad' },
        // Semestre 3
        { id: 'DQUI1047', name: 'Química Analítica', semester: 3, prerequisites: ['DQUI1046'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DQUI1052', name: 'Química Orgánica', semester: 3, prerequisites: ['DQUI1045'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DQUI1053', name: 'Fisicoquímica', semester: 3, prerequisites: ['DQUI1046'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DBIO1085', name: 'Fisiología Integrada', semester: 3, prerequisites: ['DBIO1091'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DSPU0012', name: 'Salud Poblacional', semester: 3, prerequisites: [], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'ELEC0DGEE01', name: 'Gestión personal y Habilidades para la vida', semester: 3, prerequisites: [], status: 'disponible', type: 'profesional' }, // CORREGIDO
        // Semestre 4
        { id: 'DQUI1054', name: 'Análisis Instrumental', semester: 4, prerequisites: ['DQUI1047'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DQUI1055', name: 'Química Orgánica Avanzada', semester: 4, prerequisites: ['DQUI1052'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DBIO1094', name: 'Bioquímica General', semester: 4, prerequisites: ['DQUI1052'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DMOR1019', name: 'Fisiopatología', semester: 4, prerequisites: ['DBIO1085'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DSPU0014', name: 'Epidemiología', semester: 4, prerequisites: ['DSPU0012'], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'QYFAD001', name: 'Hito Evaluativo Integrativo', semester: 4, prerequisites: ['DQUI1047','DQUI1052','DQUI1053','DBIO1085','DSPU0012','ELEC0DGEE01'], status: 'bloqueado', type: 'hito' },
        // Semestre 5
        { id: 'DBIO1087', name: 'Farmacología I', semester: 5, prerequisites: ['DMOR1019'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'FACU0004', name: 'Salud Digital', semester: 5, prerequisites: [], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'DBIO1095', name: 'Microbiología General', semester: 5, prerequisites: ['DBIO1094'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'QYFAE001', name: 'Tecnología Farmacéutica I', semester: 5, prerequisites: ['DQUI1053'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAE002', name: 'Química Farmacéutica I', semester: 5, prerequisites: ['DQUI1055'], status: 'bloqueado', type: 'profesional' },
        { id: 'FORI003', name: 'Persona y Sociedad', semester: 5, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 6
        { id: 'DBIO1096', name: 'Farmacología II', semester: 6, prerequisites: ['DBIO1087'], status: 'bloqueado', type: 'disciplinar' },
        { id: 'DEBI0002', name: 'Bioética', semester: 6, prerequisites: [], status: 'bloqueado', type: 'disciplinar' }, // CORREGIDO
        { id: 'QYFAF001', name: 'Tecnología Farmacéutica II', semester: 6, prerequisites: ['QYFAE001'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAF002', name: 'Química Farmacéutica II', semester: 6, prerequisites: ['QYFAE002'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAF003', name: 'Práctica I', semester: 6, prerequisites: ['DBIO1096'], status: 'bloqueado', type: 'profesional' },
        { id: 'ELEECFORI01', name: 'Electivo I: Formación de Identidad', semester: 6, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 7
        { id: 'DSPU0011', name: 'Metodología de Investigación', semester: 7, prerequisites: [], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAG001', name: 'Farmacia Clínica y Atención Farmacéutica I', semester: 7, prerequisites: ['DBIO1096'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAG004', name: 'Legislación Farmacéutica', semester: 7, prerequisites: ['QYFAF001'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAG002', name: 'Farmacognosia y Fitoterapia', semester: 7, prerequisites: ['QYFAF002'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAG003', name: 'Control y Aseguramiento de Calidad', semester: 7, prerequisites: [], status: 'bloqueado', type: 'profesional' },
        { id: 'ELECFORI02', name: 'Electivo II: Formación de Identidad', semester: 7, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 8
        { id: 'QYFAH002', name: 'Farmacia Clínica y Atención Farmacéutica II', semester: 8, prerequisites: ['QYFAG001'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAH003', name: 'Biofarmacia', semester: 8, prerequisites: ['QYFAG003'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAH001', name: 'Toxicología', semester: 8, prerequisites: ['DBIO1096'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAH006', name: 'Farmacia Asistencial', semester: 8, prerequisites: [], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAH004', name: 'Práctica II: Farmacia Comunitaria', semester: 8, prerequisites: ['QYFAG004'], status: 'bloqueado', type: 'profesional' },
        { id: 'QYFAH005', name: 'Hito Evaluativo Interprofesional', semester: 8, prerequisites: ['DSPU0011', 'QYFAG001','QYFAG004','QYFAG002','QYFAG003','ELECFORI02','DBIO1096','DEBI0002','QYFAF001','QYFAF002','QYFAF003','ELEECFORI01'], status: 'bloqueado', type: 'hito' },
        // Semestre 9
        { id: 'QYFAI001', name: 'Gestión y Marketing Farmacéutico', semester: 9, prerequisites: [], status: 'bloqueado', type: 'profesional' }, // CORREGIDO
        { id: 'QYFAI002', name: 'Farmacovigilancia y Tecnovigilancia', semester: 9, prerequisites: ['QYFAH002','QYFAH003'], status: 'bloqueado', type: 'profesional' },
        { id: 'ELECQYFA01', name: 'Electivo I', semester: 9, prerequisites: ['QYFAH005'], status: 'bloqueado', type: 'identidad' },
        { id: 'ELECQYFA02', name: 'Electivo II', semester: 9, prerequisites: ['QYFAH005'], status: 'bloqueado', type: 'identidad' },
        { id: 'ELECQYFA03', name: 'Electivo III', semester: 9, prerequisites: ['QYFAH005'], status: 'bloqueado', type: 'identidad' },
        { id: 'ELECFORI03', name: 'Electivo III: Formación e Identidad', semester: 9, prerequisites: [], status: 'disponible', type: 'identidad' },
        // Semestre 10
        { id: 'QYFAJ001', name: 'Internado', semester: 10, prerequisites: ['QYFAH002','QYFAH003','QYFAH001','QYFAH005','QYFAH004'], status: 'bloqueado', type: 'profesional' },
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
