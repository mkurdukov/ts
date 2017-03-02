var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        var p = { firstName: 'm', lastName: 'l' };
        Startup.create({ firstName: 'Max', lastName: 'Kur' });
        Startup.create(p);
        var mObj = { firstName: 'Max', lastName: 'Kur', email: 'test@test.com' };
        Startup.create(mObj);
        var fullP = { firstName: 'Max', lastName: 'Kur', email: 'test@test.com', userName: 'mk' };
        Startup.create(fullP);
        return 0;
    };
    Startup.create = function (p) {
        var result = 'User info: ' + p.firstName + ' ' + p.lastName;
        if (p.email)
            result += '( ' + p.email + ' )';
        if (p.userName)
            result += ' with username:' + p.userName;
        console.log(result);
    };
    return Startup;
}());
var Point = (function () {
    function Point() {
    }
    return Point;
}());
Startup.main();
//# sourceMappingURL=main.js.map