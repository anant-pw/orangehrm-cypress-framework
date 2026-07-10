import { datePicker } from '../components/DatePicker'
import { dropdown } from '../components/Dropdown'
import { modal } from '../components/Modal'


class EmployeePage {

    jobTitle = dropdown('.oxd-select-wrapper')
    deleteEmployeeModal = modal('.oxd-dialog-container')
    joinedDate = datePicker('input[placeholder="yyyy-mm-dd"]')



}

export const employeePage = new EmployeePage()