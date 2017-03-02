class Startup {
    public static main(): number {
        console.log('Hello World');
        let p: Person = {firstName: 'm', lastName: 'l'};
        Startup.create( {firstName: 'Max', lastName: 'Kur'});
        Startup.create(p);
        let mObj = {firstName: 'Max', lastName: 'Kur', email: 'test@test.com'};      
        Startup.create( mObj);

        let fullP: Person = {firstName: 'Max', lastName: 'Kur', email: 'test@test.com', userName: 'mk'};

Startup.create(fullP);
        return 0;
    }

    private static create(p: Person ) : void
    {
        let result:string = 'User info: ' + p.firstName + ' ' + p.lastName;
        if(p.email)
            result += '( ' + p.email + ' )';

        if(p.userName)
            result += ' with username:' + p.userName;


        console.log(result);
    } 
}

interface Person {
    firstName: string;
    lastName: string;
    email?: string;
    userName?: string;
}

interface IPoint{
    readonly x: number;
    readonly y: number;
}

class Point implements IPoint{
    readonly x: number;
    readonly y1: number;
}

Startup.main();


