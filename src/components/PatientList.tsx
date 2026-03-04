import { LinkedList } from "../tools/LinkedList"

export interface PatientsListProps {
    patients: Array<string>
}

export interface Patients {
    name: string
}

export function PatientsToLinkedList(patients: Array<string>) {
    let linked = new LinkedList
    patients.forEach(patient => linked.append(patient))
    //linked.print()
    return linked;
}

export function ObjectToArray(patients: Array<Patients>) {
    return patients.map(obj => obj.name)
}

export function PatientsToArray(patients: LinkedList) {
    return patients.toArray()
}

export function RenderArray({patients}: PatientsListProps) {
    return (<>
        <ol>
        {
             patients.map((item, index) => {
                  return <li  key={index}> { item } ({index + 1}) </li>
             })
        }
        </ol>
    </>);
}


