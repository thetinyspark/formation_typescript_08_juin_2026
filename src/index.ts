import { Inject } from "./decorators/Inject";
import { Injectable } from "./decorators/Injectable";
import LogMethodCall from "./decorators/LogMethodCall";
import { LogParam } from "./decorators/LogParam";
import { Readonly } from "./decorators/ReadOnly";
import rootContainer from "./ioc/ContainerIoC";


@Injectable(
    {
        key: "NAME_KEY", 
        isSingleton: false
    }
)
class MyName{
    public sayMyName():void{
        console.log("I am Heisenberg");
    }
}


@Injectable(
    {
        key: "TEST_KEY", 
        isSingleton: true
    }
)
class Test{
    public name:MyName = Inject<MyName>("NAME_KEY") as MyName;
}

const test1 = rootContainer.resolve<Test, any>("TEST_KEY");
test1?.name.sayMyName();
// console.log(test1 === test2);

