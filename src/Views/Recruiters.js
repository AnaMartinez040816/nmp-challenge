import React, { useEffect, useState } from 'react'
import ShortHeader from '../Components/ShortHeader';
import SmallFooter from '../Components/SmallFooter';
import TableRecluter from '../Components/TableRecluter';
import FilterVacants from '../Components/FilterVacants';
import FilterStatus from '../Components/FilterStatus';

import openModal from '../Components/ModalFunction';
import ModalPreSingup from '../Components/ModalPreSignup';
import FilterStatus from '../Components/FilterStatus';

import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import '../Styles/RecruiterView.css'

const db = firebase.firestore();

const Recruiters = () => {
  const [user, setUser] = useState({});
  const [recruiter, setRecruiter] = useState({})
  const [value, setValue] = useState();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user != null) {
        console.log(user.uid);
        
        db.collection("users").where("UID", "==", user.uid).get()
        .then((querySnapshot)=> {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUser(doc.data())
            db.collection("recruiters").where("id", "==", doc.data().recruiterID).get()
            .then((querySnapshot)=> {
              querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setRecruiter(doc.data())
              })
            })      
          });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        }); 
    }
  }, [])

  const registerCandidateBtn = () => {
    openModal(ModalPreSingup);
  }
  

  return (
    <div className='profile-container'>
      <ShortHeader />
      <div className='displayDataCandidates'>
        <p>
				  ¡Hola, Alexander!
			  </p>
        {/* <div className="mainContainer"> */}
        <div className="buttonsRecruiters">
          <div className="selectsRecluters">
            <FilterStatus setValue = {setValue} />
            {/* <select
              className ="btn-selectRecluter"
              type="number"
              onChange={(e) => {
              setValue(e.target.value);
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
            </select> */}
            <select
            className ="btn-selectRecluter"
            type="number"
            onChange={(e) => {
            setValue(e.target.value)
            console.log(e.target.value);



          }}>
            <option value="">FILTRAR POR VACANTE</option>
            <option value="BI">BUSSINESS INTELLIGENCE</option>
            <option value="TI">TECNOLOGÍA DE LA INF./SISTEMAS</option>
            <option value="EC">ESTRATEGÍA COMERCIAL</option>
            <option value="OPP">OPERACIÓN PRENDARIA</option>
            <option value="SEG">SERVICIOS GENERALES</option>
            <option value="CPR">CONTROL PRESUPUESTAL</option>
            <option value="AUD">AUDITORÍA</option>
            <option value="PRD">PRODUCTOS</option>
            <option value="PFI">PLANEACIÓN FINANCIERA</option>
          </select>
          </div> 
          <input type='button' 
            id=''
            className='btn-formNewCandidate'
            value='REGISTRAR NUEVO CANDIDATO'
            onClick={registerCandidateBtn} 
          />
          </div>
         
          <div className="tableContainer">
            <TableRecluter />
          </div>
        </div>
       <SmallFooter />   
      </div> 
    
    
  
  )
}

export default Recruiters;