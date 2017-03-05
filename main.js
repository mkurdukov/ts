class Startup {
    static main() {
        console.log('Hello World');
        let p = { firstName: 'm', lastName: 'l' };
        Startup.create({ firstName: 'Max', lastName: 'Kur' });
        Startup.create(p);
        let mObj = { firstName: 'Max', lastName: 'Kur', email: 'test@test.com' };
        Startup.create(mObj);
        let fullP = { firstName: 'Max', lastName: 'Kur', email: 'test@test.com', userName: 'mk' };
        Startup.create(fullP);
        return 0;
    }
    static create(p) {
        let result = 'User info: ' + p.firstName + ' ' + p.lastName;
        if (p.email)
            result += '( ' + p.email + ' )';
        if (p.userName)
            result += ' with username:' + p.userName;
        console.log(result);
    }
}
class Point {
}
Startup.main();
//# sourceMappingURL=main.js.map