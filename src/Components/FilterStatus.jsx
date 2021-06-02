import React, {useEffect, useState} from 'react';
import firebase from '../Firebase/firebase'
import '../Styles/TableRecluter.css'
import '../Styles/RecruiterView.css'  
import TableRecluter from '../Components/TableRecluter';

const FilterStatus = (props) => {
  const db = firebase.firestore().collection('candidates').where("status", "=", "e.target.value");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataFilter, setDataFilter] = useState([]);
  const datas = () => {db.onSnapshot((querySnapshot)=> {
    const docs = [];
    querySnapshot.forEach(async(doc) => {
       docs.push({ ...doc.data()});
    })
    setDataFilter(docs);
    console.log(db)
    console.log("e.target.value")
    console.log(docs, 'datos');

    <TableRecluter />

  })

  // const filtered = datas.filter(datas.status === setValue);
}
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() =>{
    datas();
  }, []);


    // const filterData= datas.filter((jobPostulation, e) => jobPostulation.status === setDataFilter(e.target.value));
    
    // console.log("armo filterData");


    console.log(datas, 'soy data miri')
    return (
      <>
        <select
          className ="btn-selectRecluter"
          type="number"
          onChange={(e) => {
          props.setValue(e.target.value);
          console.log(e.target.value);

          }}>
            <option value="">FILTRAR POR STATUS</option>
            <option value="REGISTRADO">REGISTRADO</option>
            <option value="CV Y SOLICITUD">CV Y SOLICITUD</option>
            <option value="EVALUACIÓN">EVALUACIÓN</option>
            <option value="ENTREVISTAS">ENTREVISTAS</option>
            <option value="DOCUMENTACIÓN">DOCUMENTACIÓN</option>
            <option value="EXAMEN MÉDICO">EXAMEN MÉDICO</option>
            <option value="ESTUDIO SOCIO-ECONÓMICO">ESTUDIO SOCIO-ECONÓMICO</option>
            <option value="PROCESO CONCLUIDO">PROCESO CONCLUIDO</option>
        </select>
      </>    
    )

    
};
  export default FilterStatus;

