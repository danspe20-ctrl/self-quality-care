// usuarios.js

// User Registration and Login System using localStorage

class UserAuth {
    constructor() {
        this.users = [];
        this.loadUsers();
    }

    // Load users from localStorage
    loadUsers() {
        const usersJSON = localStorage.getItem('users');
        this.users = usersJSON ? JSON.parse(usersJSON) : [];
    }

    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    // Register new user
    register(username, password) {
        if (this.users.find(user => user.username === username)) {
            return 'User already exists.';
        }
        this.users.push({ username, password });
        this.saveUsers();
        return 'User registered successfully.';
    }

    // Login user
    login(username, password) {
        const user = this.users.find(user => user.username === username);
        if (!user) {
            return 'User not found.';
        }
        if (user.password === password) {
            return 'Login successful.';
        }
        return 'Incorrect password.';
    }
}

// Example usage:
const auth = new UserAuth();
console.log(auth.register('testuser', 'password123'));  // Register a new user
console.log(auth.login('testuser', 'password123'));     // Login with the registered user