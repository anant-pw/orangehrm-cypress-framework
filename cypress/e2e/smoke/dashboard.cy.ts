import { app } from "../../core";

describe('Dashboard', () => {

    beforeEach(() => {
        ;(app.login as any).loginAsAdmin()
    })

    it('should load dashboard', () => {
        app.dashboard.verifyDashboardLoaded()
    })

})