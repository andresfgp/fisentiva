import fisioterapia from '../../assets/static/services/fisioterapia.png';
import fisioterapiaAdulto from '../../assets/static/services/fisioterapiaAdulto.png';
import fisioterapiaPediatrica from '../../assets/static/services/fisioterapiaPediatrica.png';
import fisioterapiaDomiciliaria from '../../assets/static/services/fisioterapiaDomiciliaria.png';
import medicinaGeneral from '../../assets/static/services/medicinaGeneral.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    'services': [
      { 'id': 1,
        'title':'FISIOTERAPIA',
        'text':'Acompañamiento continuo en esta etapa de la vida con terapia física personalizada.',
        'img': fisioterapia,
      },
      { 'id': 2,
        'title':'FISIOTERAPIA ADULTO MAYOR',
        'text':'Rehabilitación de diversas patologías y entrenamiento de capacidades físicas de acuerdo a una evaluación individual con objetivos acordes a cada persona.',
        'img': fisioterapiaAdulto,
      },
      { 'id': 3,
        'title':'FISIOTERAPIA PEDIÁTRICA',
        'text':'Estimulación adecuada de 0 a 5 años, Rehabilitación neurológica y osteomuscular.',
        'img': fisioterapiaPediatrica,
      },
      { 'id': 4,
        'title':'FISIOTERAPIA DOMICILIARIA',
        'text':'Fisioterapia personalizada desde la comodidad de tu casa con horarios ajustados a tu conveniencia.',
        'img': fisioterapiaDomiciliaria,
      },
      { 'id': 5,
        'title':'MEDICINA GENERAL',
        'text':'Fisioterapia personalizada desde la comodidad de tu casa con horarios ajustados a tu conveniencia.',
        'img': medicinaGeneral,
      },
    ],
  };