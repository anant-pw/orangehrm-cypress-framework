export class EmployeeBuilder {

    private employee = {
        firstName: 'John',
        lastName: 'Doe',
        employeeId: Math.floor(Math.random() * 100000)
    }

    withFirstName(firstName: string) {
        this.employee.firstName = firstName
        return this
    }

    withLastName(lastName: string) {
        this.employee.lastName = lastName
        return this
    }

    withEmployeeId(employeeId: number) {
        this.employee.employeeId = employeeId
        return this
    }

    build() {
        return this.employee
    }

}