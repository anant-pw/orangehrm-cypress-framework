export class EmployeeFactory {

    static create() {

        return {
            firstName: `John${Date.now()}`,
            lastName: 'Doe',
            employeeId: Math.floor(Math.random() * 100000)
        }

    }

}