import { useState, useEffect } from 'react'
import corazon from './assets/corazon.svg'
import {PatientsToArray, PatientsToLinkedList, RenderArray, ObjectToArray} from './components/PatientList'
import type {Patients} from './components/PatientList'
import './App.css'
import type { Doctor } from './components/doctors'
import { AttendFirstPatient } from './components/AttendPatient'

function App() {
  const [patients, setPatients] = useState<Patients[]>([])
  const [doctors, setDoctors] = useState<Doctor[]>([])
//    const attendPatient = ()=> {
//      linked.remove(linked.head)
//      console.log("eliminado")
  useEffect(() => {
    setPatients([
      {name: "Julian Herrera"},
      {name: "Mariana Campo"},
      {name: "Daniela Sotelo"},
      {name: "Sebastian Leiton"},
      {name: "Samuel De Luque"},
      {name: "Beta Gurt"},
      {name: "Nicolas Mora"},
      {name: "Arthur Morgan"},
      {name: "Ryan Molina"}
    ])
  }, [])

  useEffect(()=> {
    setDoctors([
      {name: "Dr. Miguel Henado"},
      {name: "Dra. Camila Leiton"},
      {name: "Dr. Bayron Bustamante"},
      {name: "Dra. Helena Díaz"}

    ])
  })

  let arrayOfPatients = ObjectToArray(patients)
  let linked = PatientsToLinkedList(arrayOfPatients)


  let patientsArray = PatientsToArray(linked)
  console.log(patientsArray.toString())



  return (
    <>
      <div>
        <img src={corazon} className="logo" alt="corazon" />
      </div>
      <h1>CLINICA AMIGA ❤️</h1>
      <div className="card">
        <h2>Médico de guardia:</h2>
      </div>
      <div className="card">
        <h2>Lista de pacientes:</h2>
        <RenderArray patients={patientsArray}/> 
        <button>ATENDER</button>
      </div>
    </>
  )
}

export default App
