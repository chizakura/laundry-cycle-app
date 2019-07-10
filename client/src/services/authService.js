// Most code on this page is based on Kareem Grant's repo here:
// https://git.generalassemb.ly/sei-nyc-thunderbolt/express-auth-lesson
const authService = {
    isAuthenticated: () => {
        const token = localStorage.getItem('token');

        if(!token) {
            return false
        }

        return true
    },
    signOut: () => {
        localStorage.removeItem('token')
    }
}

export default authService;